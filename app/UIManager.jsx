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
            searchTerm: "",
        }

        //Two ways:
        //Most efficient, binding below:
        //Binds 'this' to event, the instance, not to the class. One of the way.
        //Original onChange below: onChange={this.searchList}

        //this.searchList = this.searchList.bind(this); 
        //this.abc = this.abc.bind(this); abc is any name we decide


        //Second way: arrow function: onChange={(event) => this.searchList(event)}
    }

    searchList(event){
        var searchTerm = event.target.value;
        console.log(searchTerm);

        this.setState({
            searchTerm: searchTerm,
        });
    }

    render(){
        return( 
        <div>
            <input type="text" placeholder="Filter..." onChange={(event) => this.searchList(event)}/>
            <List name={this.state.listName} list={this.state.list}/>
        </div>
        );
    }
}

export default UIManager;
