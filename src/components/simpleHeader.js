import React from 'react';

const divStyle = {
    marginTop : '-95px',
    border: '5px solid pink',
    position : 'fixed',
    zIndex : '10'
  };

export default class SimpleHeader extends React.Component {
  render() {
    return( 
        <div style={divStyle}>
            <h1>TEST DIV IN HEADER</h1>
        </div>
    ) 
  }
}
