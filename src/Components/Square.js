import React from 'react';
const styleSquare = {
    border: '2px solid black',
    width: '100px',
    height: '100px',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',

}
const Square = (props) => {
    return (
        <button style={styleSquare} onClick={()=>props.handelMove(props.index, props.el)}>
            {props.el}
        </button>
    );
};

export default Square;