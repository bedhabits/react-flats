/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './flat.scss';

class Flat extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-category">{this.props.price}</div>
                <div className="card-description">
                    <h2>{this.props.name}</h2>
                </div>
                {/* { eslint-disable-next-line jsx-a11y/anchor-has-content} */}
                <a className="card-link" href={this.props.imageUrl} alt="flats"></a>
            </div>
        );
    }
}

export default Flat;