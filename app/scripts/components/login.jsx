var React = require('react');


var LoginForm = react.createClass({
    getInitialState: function(){
      return (
        username: ''
      )
    },
    render: function(){
        return (
            <form>
              <label htmlFor="login-form">Enter Username to join Chat</label>
              <input id="login-form" name="username" placeholder="enter username..."  />
              <button type="submit" className="btn btn-success">Enter Chat</button>
            </form>
      )
    }
});


module.exports = {
  LoginForm: LoginForm
}
