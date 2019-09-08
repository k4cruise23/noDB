import React, {Component} from 'react'


export default class Navigation extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    // toggle() {
    //     this.setState(prevState => ({toggleEdit: !prevState.toggleEdit}))
    // }

    // handleChange(e) {
    //     this.setState({descriptionInput: e.target.value})
    // }


    render(){
        // console.log(this.props)
        console.log(this.props.toggleEdit)
        return(
            <div className="buttons">
                <button className="previous" onClick={() => this.props.previousFn()} >Previous</button>
                <button className="add"  >Add</button>
                <button className="edit" onClick={() => this.props.toggle()} >Edit</button>
                <button className="delete" onClick={() => this.props.deleteFn(this.props.id)} >Delete</button>
                <button className="next" onClick={() => this.props.nextFn()} >Next</button>
            </div>
        )
    }
}