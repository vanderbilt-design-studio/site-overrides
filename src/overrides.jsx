import { h, render } from 'preact';
import ReconnectingWebSocket from 'reconnecting-websocket';
import clearNode from './util/clear-node';

import './overrides.scss';
import SidebarSection from './SidebarSection.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementsByClassName('graphicheader')[0];
    const headerLink = clearNode(header.getElementsByTagName('a')[0]);
    render(<div className="header-image" />, clearNode(headerLink));

    const sidebar = document.getElementById('secnav');
    const hoursTitle = clearNode(sidebar.getElementsByTagName('h4')[1]);
    render(<span>Schedule</span>, hoursTitle);

    const sidebarWidget = clearNode(
        sidebar.getElementsByClassName('textwidget')[1]
    );

    let lastData = undefined;
    let lastPrinterData = undefined;
    const renderSidebar = (data, printerData) =>
        render(
            <SidebarSection {...data} {...printerData} />,
            sidebarWidget,
            sidebarWidget.lastChild
        );
    renderSidebar();

    const socket = new ReconnectingWebSocket('wss://ds-sign.yunyul.in');
    socket.onmessage = ({ data }) => {
        alert('here2');
        lastData = JSON.parse(data);
        renderSidebar(lastData, lastPrinterData);
    };
    const printer_socket = new ReconnectingWebSocket('wss://iot.vanderbilt.design');
    printer_socket.onmessage = ({ data }) => {
        alert('here1');
        lastPrinterData = JSON.parse(data);
        renderSidebar(lastData, lastPrinterData);
    };
});
