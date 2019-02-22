import React from 'react';

class Item extends React.Component {
    render(){
        return(
            <div>
            <div>Artist: {this.props.item.artist}</div>
            <div>Album: {this.props.item.album}</div>
            <div>Title: {this.props.item.title}</div>
            </div>
        );
    }
}

export default Item;