import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';


class Ipod extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
          <div style={style.ipodContainer}>
            <Screen />
            <Wheel />
          </div>
        );
    }  
}

const style = {
    ipodContainer: {
        height: '40rem',
        width: '17rem',
        backgroundColor: 'black',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}

export default Ipod;
