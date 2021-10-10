import React from 'react';
import {ListGroup} from 'react-bootstrap';


class  Home extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div style={styles.homeScreen}>
                <div style={styles.menuListLeft}>
                    <ListGroup>
                        <ListGroup.Item style={{border:'0'}} active>Wallpapers</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Music</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Games</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Settings</ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageRight}></div>
            </div>
        );
    }  
}

const styles={
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuListLeft : {
        border:'1px solid lightgrey',
        height : '100%',
        width : '50%'
    },
    imageRight: {
        border:'1px solid lightgrey',
        height : '100%',
        width : '50%'
    }
}

export default Home;
