var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginForm = require('./components/login.jsx').LoginForm;
var ChatContainer = require('./components/index.jsx').ChatContainer;


var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'chat/': 'chat'
    },
    initialize: function(){

    },
    index: function(){
      ReactDOM.render(
        React.createElement(LoginForm, {router: this}),
        document.getElementById('app')
      );
    },
    chat: function(){
      ReactDOM.render(
        React.createElement(ChatContainer, {router: this}),
        document.getElementById('app')
      );
    }
});

var router = new AppRouter();

module.exports = router;
