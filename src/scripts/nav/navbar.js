import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './navbar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  render() {

    return (
      <header>
        <h1 className="site-title">HEXBook<br />
          <small>Connect with your fellow witches</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {(this.props.user) ?
              <li><Link className="nav-link" to="/cauldron">Cauldron</Link></li>
              : null}
            <li><Link className="nav-link" to="/coven">Coven</Link></li>
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/chat">Chat</Link></li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
              </>
              : <li><Link className="nav-link" to="/login">Login</Link></li>}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);
