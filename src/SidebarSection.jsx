import { h } from 'preact';
import ultimaker from '../assets/ultimaker-3-1@3x.png';

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
    <div className="status-sign" style={{ backgroundColor: bgColor || '#777' }}>
        <div class="sign-text">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
);

const PrinterStatus = ({ printerData }) => {

    const printerTiles = Array.from(printerData).sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        }
        return 0;
    }).map(printer => (<div className="tile">
        <img src={ultimaker} />
        <div class="name">{printer.name}</div>
        <div class="status">{printer.status}</div>
    </div>));
    alert('Rendering ' + printerTiles.length + ' printers');
    return (
        <div className="printer-status">
            {printerTiles}
        </div>
    );
};

export default ({ signData, printerData }) => {
    return (
        <div>
            {signData && <StatusSign {...signData} />}
            {printerData && <PrinterStatus printerData={printerData} />}
            <Hours />
            <p>We are closed during all school holidays and breaks.</p>
        </div>
    );
};
