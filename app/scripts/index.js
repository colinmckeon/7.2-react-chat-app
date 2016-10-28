var $ = require('jquery');
var Backbone = require('backbone');
require('./router.js');



//WAITS FOR DOM TO BE READY
$(function(){
    Backbone.history.start();
});
