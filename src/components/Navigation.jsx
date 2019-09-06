import React, {Component} from 'react'


export default class Navigation extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="buttons">
                <button className="previous">Previous</button>
                <button className="add">Add</button>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
                <button className="next">Next</button>
            </div>
        )
    }
}