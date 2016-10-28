var $ = require('jquery');
var Backbone = require('backbone');



var Messages = Backbone.Model.extend({
  idAttribute: '_id'
});

var MessagesCollection = Backbone.Collection.extend({
  model: Messages,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});

module.exports = {
  Messages: Messages,
  MessagesCollection: MessagesCollection
};
