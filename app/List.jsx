import React from 'react';
import Item from './Item';

class List extends React.Component {
    render(){
        return(
            <div>
                <h3>{this.props.listName}</h3>
                
                {
                    this.props.list.map((item) => {
                        return (<Item item={item} key={item.id} />
						);
                    })
                }
            </div>
        );
    }
}

export default List;