import React from 'react';
import ZingTouch from 'zingtouch';


class Wheel extends React.Component{
    constructor(){
        super();
    }

    rotate = () => {
        var Parentregion = document.getElementById('wheel-container');
        var myRegion = new ZingTouch.Region(Parentregion);
        var childRegion = document.getElementById('wheel');

        myRegion.bind(childRegion, 'rotate', function(e){
            console.log('working rotate feature');
        });
    }
    render() {
        return (
            <div style = {styles.wheelContainer} className='wheel-container' id='wheel-container'>
                <div style = {styles.wheel} id="wheel" onMouseOver={this.rotate}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/3039/3039357.svg" />
                        </div>

                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404393.svg" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404395.svg" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404317.svg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

const styles = {
    wheelContainer : {
        height : '14rem',
        width : 'inherit',
        backgroundColor : 'lightgrey',
        alignSelf : 'flex-end'
    },
    wheel : {
        width : '80%',
        height : '90%',
        backgroundColor : 'white',
        margin : 'auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton:{
        alignSelf: 'center',
    },
    playButton:{
        alignSelf: 'center',
    },
    image:{
        alignSelf : 'center',
        width : '2rem',
        height : '2rem',
    },
    middleButtons:{
        alignSelf: 'center',
        width: '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}

export default Wheel;

  