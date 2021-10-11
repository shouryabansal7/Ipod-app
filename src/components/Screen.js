import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games';
import Wallpapers from './Wallpapers';
import Music from './Music';


class Screen extends React.Component{
    constructor(){
        super();
    }
    render() {
        return (
          <div style={style.screen}>
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Wallpapers'?<Wallpapers /> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
          </div>
        );
    }  
}

const style={
    screen:{
        height: '16rem',
        width: '100%',
        backgroundColor : 'white',
        border : '2px solid lightgrey'
    }
}

export default Screen;
