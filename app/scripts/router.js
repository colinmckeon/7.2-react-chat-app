var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginForm = require('./components/login.jsx').LoginForm;



var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'chat/': 'chat'
    },
    initialize: function(){

    }
});
