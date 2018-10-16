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
    <div class="status-sign" style={{ backgroundColor: bgColor || '#777' }}>
        <div class="sign-text">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
        </div>
    </div>
);

const PrinterStatus = ({ printerData }) => (
    <div className="printer-status">
        {Array.from(printerData).sort((a, b) => {
            if (a.system.name > b.system.name) {
                return 1;
            } else if (a.system.name < b.system.name) {
                return -1;
            }
            return 0;
        }).map(printer => (<div className="tile">
            <img class="printer" src={ultimaker} />
            <div class="title"><span class="name">{printer.system.name}</span>: <span class="status">{printer.system.status}</span></div>
            {printer.print_job && <div class="desc"><span>{printer.print_job.time_elapsed}</span>/<span>{printer.print_job.time_total}</span></div>}
        </div>
        ))}
    </div>
);

export default ({ signData, printerData }) => (
    <div>
        {signData && <StatusSign {...signData} />}
        {printerData && <PrinterStatus printerData={printerData} />}
        <Hours />
        <p>We are closed during all school holidays and breaks.</p>
    </div>
);
