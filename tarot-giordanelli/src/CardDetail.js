import React, { Component } from 'react';
import './CardDetail.css';

class CardDetail extends Component {
    render() {
        return (
            <div>
                <div className="card-detail">
                    <h3>{this.props.name}</h3>
                    <img src={this.props.url + this.props.image} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in odio volutpat, iaculis eros ac, euismod nibh. Nam nec lacus suscipit, pulvinar velit vel, consectetur mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus maximus convallis aliquet. Aenean interdum lectus eget rutrum suscipit. In gravida lacinia ipsum, ac ornare turpis faucibus ut. Morbi et posuere ligula, eget ultricies quam. Nam sed ligula felis. Donec semper ipsum velit, id ultrices enim tempus id.

                Nullam commodo ac nisi ut efficitur. Praesent id felis justo. Aenean pharetra arcu fermentum, elementum neque ac, efficitur justo. Ut congue dui elit, dapibus tincidunt purus interdum quis. Integer dapibus erat a aliquam commodo. Maecenas fermentum arcu eget risus tempor egestas. Fusce imperdiet consequat dui, eu consequat velit faucibus a. Cras maximus sagittis elit nec sollicitudin. Curabitur viverra sapien at est vulputate fermentum. Suspendisse accumsan felis vitae sapien vestibulum aliquet. Nullam eleifend enim et mi sodales molestie quis a urna. Sed consectetur vitae lectus pretium laoreet. Morbi odio nulla, efficitur imperdiet ullamcorper nec, rhoncus et ipsum. Nullam lobortis sit amet ligula in gravida. Fusce mauris nisi, ullamcorper ut dolor quis, accumsan accumsan massa.</p>
            </div>
        )
    }
};

export default CardDetail;