import { h, render, Component } from 'preact';
import ReconnectingWebSocket from 'reconnecting-websocket';

import './overrides.scss';

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
    const Hours = () => (
        <table>
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td>2 PM – 10 PM</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>2 PM – 10 PM</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>2 PM – 10 PM</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>2 PM – 10 PM</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>12 PM – 4 PM</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>Closed</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>4 PM – 10 PM</td>
                </tr>
            </tbody>
        </table>
    );

    class SidebarSection extends Component {
        state = {};

        componentDidMount() {
            const socket = new ReconnectingWebSocket('wss://ds-sign.yunyul.in');
            socket.onmessage = ({ data }) => this.setState(JSON.parse(data));
        }

        render() {
            return (
                <div>
                    <div style={{ display: 'none' }}>
                        {JSON.stringify(this.state)}
                    </div>
                    <Hours />
                    <p>We are closed during all school holidays and breaks.</p>
                </div>
            );
        }
    }

    render(<SidebarSection />, clearNode(sidebarWidget));
});
