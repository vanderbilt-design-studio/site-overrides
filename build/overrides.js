'use strict';

window.addEventListener('load', function () {
    // console.log('Applying overrides')
    var sidebar = document.querySelector('#secnav');
    sidebar.querySelectorAll('h4')[1].textContent = 'Schedule';

    var Hours = function Hours() {
        return React.createElement(
            'div',
            { className: 'textwidget' },
            React.createElement(
                'table',
                null,
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Monday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '2 PM \u2013 10 PM'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Tuesday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '2 PM \u2013 10 PM'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Wednesday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '2 PM \u2013 10 PM'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Thursday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '2 PM \u2013 10 PM'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Friday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '12 PM \u2013 4 PM'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Saturday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Closed'
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Sunday'
                        ),
                        React.createElement(
                            'td',
                            null,
                            '4 PM \u2013 10 PM'
                        )
                    )
                )
            ),
            React.createElement(
                'p',
                null,
                'We are closed for all school holidays and breaks.'
            )
        );
    };

    ReactDOM.render(React.createElement(Hours, null), sidebar.querySelectorAll('.textwidget')[1]);
});
