import React from 'react';
import Wheel from './Wheel';


class Ipod extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
          <div style={style.ipodContainer}>
            <Wheel />
          </div>
        );
    }  
}

const style = {
    ipodContainer: {
        height: '20rem',
        width: '17rem',
        backgroundColor: 'black',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}

export default Ipod;
