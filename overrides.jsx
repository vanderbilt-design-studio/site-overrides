window.addEventListener('load', () => {
    function clearNode(node) {
        var cNode = node.cloneNode(false);
        node.parentNode.replaceChild(cNode, node);
        return cNode;
    }

    const header = document.getElementsByClassName('graphicheader')[0];
    const headerLink = header.getElementsByTagName('a')[0];
    Inferno.render(
        <img
            src="https://vanderbilt-design-studio.github.io/site-overrides/DSHeader.svg"
            width="950"
        />,
        clearNode(headerLink)
    );

    const sidebar = document.getElementById('secnav');
    const hoursTitle = sidebar.getElementsByTagName('h4')[1];
    Inferno.render(<span>Schedule</span>, clearNode(hoursTitle));

    const hoursWidget = sidebar.getElementsByClassName('textwidget')[1];
    const Hours = () => (
        <div>
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

    Inferno.render(<Hours />, clearNode(hoursWidget));
});
