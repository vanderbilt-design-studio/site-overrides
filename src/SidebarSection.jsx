import { h } from 'preact';

export default ({ hoursData }) => (
    <div>
        <table class="hours">
            <tbody>
                {hoursData && hoursData.map(({ day_of_week, hours }) => (
                    <tr>
                        <td>{day_of_week}</td>
                        <td>{hours.join(',')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>We are closed during all school holidays and breaks.</p>
        <div class="status-sign-container">
            <iframe class="status-sign" src="https://sign2.vanderbilt.design" />
        </div>
    </div>
);
