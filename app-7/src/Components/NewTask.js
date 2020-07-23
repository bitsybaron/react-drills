import React, {Component} from 'react';

class NewTask extends Component {

    render() {
        return (
            <div>
                <input onChange={e => this.props.change(e.target.value)}/>
                <button onClick={() => this.props.click()}>Add to List</button>
            </div>
        )
        
    }
}

export default NewTask