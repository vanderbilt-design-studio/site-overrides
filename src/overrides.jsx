import { h, render } from 'preact';
import ReconnectingWebSocket from 'reconnecting-websocket';
import clearNode from './util/clear-node';

import './overrides.scss';
import SidebarSection from './SidebarSection.jsx';
import PrinterFooter from './PrinterFooter.jsx';
import DSHeader from '../assets/DSHeader.svg';

document.addEventListener('DOMContentLoaded', () => {
    const headerLink = document.getElementsByClassName('livetextheader')[0];
    render(
        <img src={DSHeader} className={'header-image'} />,
        clearNode(headerLink)
    );

    const sidebar = document.getElementById('sidebar__right');
    const headers = sidebar.getElementsByTagName('h4');
    const hoursTitleIndex = headers[0].classList.contains('child_header')
        ? 2
        : 1;
    const hoursTitle = clearNode(headers[hoursTitleIndex]);
    render(<span>Hours</span>, hoursTitle);

    const sidebarWidget = clearNode(
        sidebar.getElementsByClassName('textwidget')[1]
    );

    let state = {};

    const renderSidebar = () => {
        render(
            <SidebarSection {...state} />,
            sidebarWidget,
            sidebarWidget.lastChild
        );
    };
    renderSidebar();

    const navbar = document.getElementById('sitenav');
    if (navbar.firstChild.classList.contains('current_page_item')) {
        const primaryContent = document.getElementsByClassName(
            'primary-content'
        )[0];
        const panelBody = primaryContent.getElementsByClassName(
            'panel-body'
        )[0];
        const printerFooter = panelBody.appendChild(
            document.createElement('div')
        );

        const renderFooter = () => {
            render(<PrinterFooter {...state} />, panelBody, printerFooter);
        };
        renderFooter();

        const printerSocket = new ReconnectingWebSocket(
            'wss://iot.vanderbilt.design/printers'
        );
        printerSocket.onmessage = ({ data }) => {
            state = { ...state, printerData: JSON.parse(data).printers };
            renderFooter();

            // Save users' data on cellular connections, they can manually
            // refresh the page instead.
            const connectionType =
                navigator.connection && navigator.connection.type;
            if (connectionType && connectionType == 'cellular') {
                printerSocket.close();
            }
        };

        // Save user data when page not visible.
        document.addEventListener(
            'visibilitychange',
            () => {
                if (document.visibilityState) {
                    if (document.visibilityState == 'hidden') {
                        printerSocket.close();
                    } else if (document.visibilityState == 'visible') {
                        printerSocket.reconnect();
                    }
                }
            },
            false
        );
    }
});
