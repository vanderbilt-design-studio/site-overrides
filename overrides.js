window.addEventListener('load', () => {
    console.log('Applying overrides')
    const sidebar = document.querySelector('#secnav');
    sidebar.querySelectorAll('h4')[1].textContent = 'Schedule';

    const Hours = () => (
        <div className="textwidget">
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
            <p>We are closed for all school holidays and breaks.</p>
        </div>
    );

    ReactDOM.render(<Hours />, sidebar.querySelectorAll('.textwidget')[1]);
});
