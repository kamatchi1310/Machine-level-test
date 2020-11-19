import React from 'react';
import image from './image/1597831144453011_2042644630.png';
import image1 from './image/1597831156586003_2042644630.png';

class NavBar extends React.Component{
    render(){
        return(
            <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
            <ul>
              <li className="logo1"><a href="#"><img src={image} alt="Aalavai Technologies" height="50px" width="50px" /></a></li>
              <li className="logo2"><a href="#"><img src={image1} alt="Aalavai Technologies" height="50px" width="120px" /></a></li>
              <li className="nav"><a className="link" href="#">About</a></li>
              <li className="nav"><a className="link" href="#">Cloud</a></li>
              <li className="nav"><a className="link" href="#">AI & ML</a></li>
              <li className="nav"><a className="link" href="#">E-Commerce</a></li>
              <li className="nav"><a className="link" href="#">Custom Development</a></li>
              <li className="nav"><a className="link" href="#">Success Stories</a></li>
              <li className="nav"><a className="link" href="#">Contact</a></li>


            </ul>
          </div>
    
        )
    }
}

export default NavBar;