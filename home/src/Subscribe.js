import React from 'react';
class Subscribe extends React.Component {
  render() {
    return (
      <form class="form-inline">
        <ul>
          <li ><h1 style={{ color: "white", padding: "0px 450px 10px 80px" }}>
            <b style={{ fontSize: "50px" }}>Subscribe</b><br />
                      to our Newsletter</h1></li>
          <input type="email" id="email" placeholder="Enter Your Email" />
          <i class="fa fa-paper-plane" aria-hidden="true"></i>

        </ul>
      </form>

    )
  }
}

export default Subscribe;