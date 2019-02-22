import React from 'react';
import Item from './Item';

class List extends React.Component {
    render(){
        return(
            <div>
                <h3>{this.props.listName}</h3>
                
                {
                    this.props.list.map((item) => {
                        return (
                            <div> 
                                <Item item={item} key={item.id}/>
                                <hr/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default List;