import { h, render } from 'preact';
import clearNode from './util/clear-node';

import './overrides.scss';
import SidebarSection from './SidebarSection.jsx';

const header = document.getElementsByClassName('graphicheader')[0];
const headerLink = header.getElementsByTagName('a')[0];
render(<div className="header-image" />, clearNode(headerLink));

const sidebar = document.getElementById('secnav');
const hoursTitle = sidebar.getElementsByTagName('h4')[1];
render(<span>Schedule</span>, clearNode(hoursTitle));

const sidebarWidget = sidebar.getElementsByClassName('textwidget')[1];
render(<SidebarSection />, clearNode(sidebarWidget));
