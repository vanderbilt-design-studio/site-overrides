import { h } from 'preact';

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
                <td>2 PM – 9 PM</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>2 PM – 10 PM</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>12 PM – 2 PM</td>
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
    <div class="status-sign" style={{ backgroundColor: bgColor || '#777' }}>
        <div class="sign-text">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
);

export default ({ signData }) => (
    <div>
        {signData && <StatusSign {...signData} />}
        <Hours />
        <p>We are closed during all school holidays and breaks.</p>
    </div>
);
