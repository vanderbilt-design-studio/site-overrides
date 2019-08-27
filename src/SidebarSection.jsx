import { h } from 'preact';

const Hours = () => (
    <table class="hours">
        <tbody>
            <tr>
                <td>Sunday</td>
                <td>2 PM – 6 PM</td>
            </tr>
            <tr>
                <td>Monday</td>
                <td>12 PM – 10 PM</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>
                    1 PM – 10 PM
                </td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>12 PM – 10 PM</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>1 PM – 10 PM</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>12 PM – 4 PM</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>Closed</td>
            </tr>
        </tbody>
    </table>
);

export default ({ signData }) => (
    <div>
        <Hours />
        <p>We are closed during all school holidays and breaks.</p>
        <iframe class="status-sign" src="https://sign2.vanderbilt.design" />
    </div>
);
