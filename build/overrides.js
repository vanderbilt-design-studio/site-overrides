'use strict';

var createVNode = Inferno.createVNode;
window.addEventListener('load', function () {
    function clearNode(node) {
        var cNode = node.cloneNode(false);
        node.parentNode.replaceChild(cNode, node);
        return cNode;
    }

    var sidebar = document.getElementById('secnav');
    var hoursTitle = sidebar.getElementsByTagName('h4')[1];
    Inferno.render(createVNode(2, 'span', null, 'Schedule'), clearNode(hoursTitle));

    var hoursWidget = sidebar.getElementsByClassName('textwidget')[1];
    var Hours = function Hours() {
        return createVNode(2, 'div', null, [createVNode(2, 'table', null, createVNode(2, 'tbody', null, [createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Monday'), createVNode(2, 'td', null, '2 PM \u2013 10 PM')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Tuesday'), createVNode(2, 'td', null, '2 PM \u2013 10 PM')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Wednesday'), createVNode(2, 'td', null, '2 PM \u2013 10 PM')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Thursday'), createVNode(2, 'td', null, '2 PM \u2013 10 PM')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Friday'), createVNode(2, 'td', null, '12 PM \u2013 4 PM')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Saturday'), createVNode(2, 'td', null, 'Closed')]), createVNode(2, 'tr', null, [createVNode(2, 'td', null, 'Sunday'), createVNode(2, 'td', null, '4 PM \u2013 10 PM')])])), createVNode(2, 'p', null, 'We are closed for all school holidays and breaks.')]);
    };

    Inferno.render(createVNode(16, Hours), clearNode(hoursWidget));
});
