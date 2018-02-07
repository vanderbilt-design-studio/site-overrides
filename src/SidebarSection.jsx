import { h, Component } from 'preact';
import ReconnectingWebSocket from 'reconnecting-websocket';

const Hours = () => (
    <table>
        <tbody>
            <tr>
                <td>Monday</td>
                <td>2 PM – 10 PM</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>2 PM – 7 PM</td>
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
                <td>2 PM – 6 PM</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>Closed</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>4 PM – 8 PM</td>
            </tr>
        </tbody>
    </table>
);

const StatusSign = ({ bgColor, title, subtitle }) => (
    <div className="status-sign" style={{ backgroundColor: bgColor || '#777' }}>
        <div class="sign-text">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
);

export default class SidebarSection extends Component {
    state = { signData: {} };

    componentDidMount() {
        const socket = new ReconnectingWebSocket('wss://ds-sign.yunyul.in');
        socket.onmessage = ({ data }) =>
            this.setState({ signData: JSON.parse(data) });
    }

    render() {
        const { signData } = this.state;
        return (
            <div>
                {(signData.title || signData.subtitle) && (
                    <StatusSign {...signData} />
                )}
                <Hours />
                <p>We are closed during all school holidays and breaks.</p>
            </div>
        );
    }
}
