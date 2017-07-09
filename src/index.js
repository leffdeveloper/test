var $ = require('jquery');
var str = require('../src/constant.js');

var App = function() {
    // console.log(str);
    $('body').html(str);
};

var app = new App();
app.get = function() {};
