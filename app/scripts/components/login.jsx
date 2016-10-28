var React = require('react');


var LoginForm = React.createClass({
    getInitialState: function(){
      return {
        username: ''
      }
    },
    handleUsername: function(event){
      var username = event.target.value;
      this.setState({username: username});
    },
    handleSubmit: function(event){
      event.preventDefault();
      var router = this.props.router;

      router.username = this.state.username;
      router.navigate('chat/', {trigger: true});
      this.setState({username: ''});
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="login-form">Enter Username to join Chat</label>
              <input onChange={this.handleUsername} id="login-form" name="username" placeholder="enter username..."  />
              <button type="submit" className="btn btn-success">Enter Chat</button>
            </form>
      )
    }
});


module.exports = {
  LoginForm: LoginForm
}
