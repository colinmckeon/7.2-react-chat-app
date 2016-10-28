var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var MessagesCollection = require('./../models/message.js').MessagesCollection;

var MessageEntry = React.createClass({

    handleMessage:function(event){
      event.preventDefault();
      alert('hello');
    },
    render: function(){
      return(
        <div className="bottom-container">
            <form id="chat-form">
                <input  onChange={this.handleMessage} className="form-control" type="text" name="" placeholder="enter message..." value=""/>
                <button className="btn btn-success" type="submit" name="button">Submit Message</button>
            </form>
        </div>
      )
    }
});

var ChatContainer = React.createClass({
  getInitialState: function(){
    var myCollection = new MessagesCollection();

    return {
      collection: myCollection
    }
  }, // sets up this.state.collection

  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    collection.fetch().then(function(){
      self.setState({collection: collection});
    })
  },

  getItems: function(){
    return this.state.collection.map(function(message){
      return <li key={message.get('_id')}>{message.get('content')}</li>
    });
  },

    render: function(){
      var messages = this.getItems();

      return(
        <div>
            <MessageEntry />
            <ul>{messages}</ul>
        </div>


      )
    }
});

module.exports = {
  ChatContainer: ChatContainer
}
