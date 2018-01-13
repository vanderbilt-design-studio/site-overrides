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

export default class SidebarSection extends Component {
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
