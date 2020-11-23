import { h } from 'preact';

export default ({ hoursData }) => (
    <div>
        <table class="hours">
            <tbody>
                {hoursData && hoursData.map(({ day_of_week, hours }) => (
                    <tr>
                        <td>{day_of_week}</td>
                        <td>{hours.length > 0 ? hours.join(',') : 'Closed'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>We are closed during all <a href="https://registrar.vanderbilt.edu//calendars/">school holidays and breaks</a> unless otherwise noted.</p>
        <div class="status-sign-container">
            <iframe class="status-sign" src="https://sign.vanderbilt.design" />
        </div>
    </div>
);
