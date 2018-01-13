import { h, render } from 'preact';

import './overrides.scss';
import SidebarSection from './SidebarSection.jsx';

document.addEventListener('DOMContentLoaded', () => {
    function clearNode(node) {
        const cNode = node.cloneNode(false);
        node.parentNode.replaceChild(cNode, node);
        return cNode;
    }

    const header = document.getElementsByClassName('graphicheader')[0];
    const headerLink = header.getElementsByTagName('a')[0];
    render(<div className="header-image" />, clearNode(headerLink));

    const sidebar = document.getElementById('secnav');
    const hoursTitle = sidebar.getElementsByTagName('h4')[1];
    render(<span>Schedule</span>, clearNode(hoursTitle));

    const sidebarWidget = sidebar.getElementsByClassName('textwidget')[1];
    render(<SidebarSection />, clearNode(sidebarWidget));
});
