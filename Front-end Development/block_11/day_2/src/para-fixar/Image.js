import React from 'react';
import '../App.css';

class Image extends React.Component {
  render() {
    return <img className='myImage' src={this.props.source} alt={this.props.alt} />;
  }
}

export default Image;
