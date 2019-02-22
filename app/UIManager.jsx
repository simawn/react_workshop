import React from 'react';
import data from './data.js';
import List from './List';

console.log(data);

class UIManager extends React.Component{

    constructor(){
        super();

        this.state = {
            listName: "The List",
            list: data.music,
        }
    }

    render(){
        return( 
        <div>
            <List name={this.state.listName} list={this.state.list}/>
        </div>
        );
    }
}

export default UIManager;
