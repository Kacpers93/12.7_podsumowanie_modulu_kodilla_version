// OGÓLNA FUNKCJA


///////////////////////////////////////////////////////////////////////////////


var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '2589',
    'X-Auth-Token': 'dcefd9ec5685ef469772a75be39e9a46'
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
    })
}


///////////////////////////////////////////////////////////////////////////////




/*

function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
    var str = '', i;
    for (i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

*/


 