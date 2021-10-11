import React from 'react';
import ZingTouch from 'zingtouch';
import Screen from './Screen';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem:'Wallpapers',
            activePage: 'Home'
        }
    }

    changePage = () =>{
        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'All_Music',
                activePage : this.state.activeItem
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
    }

    changePageToHome = () =>{
        if(this.state.activePage === 'Music'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
    }

    componentDidUpdate(){
        console.log("Updated");
    }

    rotate = () => {
        var currentAngle=15;
        var Parentregion = document.getElementById('wheel-container');
        var myRegion = new ZingTouch.Region(Parentregion);
        var childRegion = document.getElementById('wheel');
        var change=0;
        var self = this;

        myRegion.bind(childRegion, 'rotate', function(e){
            console.log('working rotate feature');

            var newAngle = e.detail.distanceFromLast;
            console.log(currentAngle , newAngle);

            if(newAngle < 0){
                console.log(change);
                change++;
                if(change === 45){
                    console.log("change state");
                    change = 0;
                    if(self.state.activePage === 'Home'){
                        if(self.state.activeItem === 'Wallpapers'){
                            self.setState({
                                activeItem : "Music"
                            })
                        }else if(self.state.activeItem === 'Music'){
                            self.setState({
                                activeItem : "Games"
                            })
                        }else if(self.state.activeItem === 'Games'){
                            self.setState({
                                activeItem : "Settings"
                            })
                        }else if(self.state.activeItem === 'Settings'){
                            self.setState({
                                activeItem : "Wallpapers"
                            })
                        }
                    }else if(self.state.activePage === 'Music'){
                        if(self.state.activeItem === 'All_Music'){
                            self.setState({
                                activeItem : "Favourites"
                            })
                        }else if(self.state.activeItem === 'Favourites'){
                            self.setState({
                                activeItem : "Artists"
                            })
                        }else if(self.state.activeItem === 'Artists'){
                            self.setState({
                                activeItem : "All_Music"
                            })
                        }
                    }
                }
            }else{
                console.log(change);
                change++;
                if(change === 15){
                    console.log("change state");
                    change = 0;
                    if(self.state.activeItem === 'Wallpapers'){
                        self.setState({
                            activeItem : "Settings"
                        })
                    }else if(self.state.activeItem === 'Music'){
                        self.setState({
                            activeItem : "Wallpapers"
                        })
                    }else if(self.state.activeItem === 'Games'){
                        self.setState({
                            activeItem : "Music"
                        })
                    }else if(self.state.activeItem === 'Settings'){
                        self.setState({
                            activeItem : "Games"
                        })
                    }
                }
            }
        });
    }
    render() {
        return (
            <div style = {styles.ipodContainer}>
                <Screen activePage={this.state.activePage} activeItem={this.state.activeItem}/>
                <div style = {styles.wheelContainer} id='wheel-container'>
                    <div id='wheel' style = {styles.wheel} onClick={this.rotate}>
                        <div style = {styles.buttonContainer}>
                            <div style = {styles.menuButton}>
                                <img onClick={this.changePageToHome} style = {styles.image} src="https://image.flaticon.com/icons/svg/3039/3039357.svg" />
                            </div>

                        </div>
                        <div style = {styles.buttonContainer}>
                            <div style = {styles.middleButtons}>
                                <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404393.svg" />
                                <div onClick={this.changePage} style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
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
            </div>
        );
    }  
}

const styles = {
    ipodContainer: {
        height: '40rem',
        width: '17rem',
        backgroundColor: 'black',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
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

export default Ipod;

  