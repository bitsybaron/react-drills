import React, {Component} from 'react';

class List extends Component {
    render() {
        
        return (
            <div>
                {this.props.list}
            </div>
        )
    }
}

export default List