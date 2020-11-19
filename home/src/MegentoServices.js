import React from 'react';
import './Megento.css'
import m2 from './image/m2.png';

class MegentoServices extends React.Component {
    render() {
        return (
            <div className="megento">
                        <center><img id="megento-img1" src={m2} height="100px" width="300px" /></center>
                        <p><h2>Magento Migration Services</h2>
We offer intuitive Magento Migration Services that reintroduces the same designs & functionalities on your store without compromising on quality and user experience. Enjoy seamless migration to magento2 and avoid getting caught up when the support of magento1 is finally disabled in June 2020.
Please reach out to us on</p>
<center><button className="btn-megento">Let's Talk</button></center>
                    </div>
        )
    }
}

export default MegentoServices;

