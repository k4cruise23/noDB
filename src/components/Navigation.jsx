import React, {Component} from 'react'


export default class Navigation extends Component{
    constructor(){
        super()
        this.state = {
            item: '',
            price: 0,
            description: '',
            img: ''
        }
    }

    handleChange = e => {
        //what are the brackets for?
        this.setState({[e.target.name]: e.target.value})
    }




    render(){
        // console.log(this.props)
        // console.log(this.props.toggleEdit)
        return(
            <section className='navigation'>
                <div className="addInputs">
                    <input onChange={this.handleChange} name='item' type="text" value={this.state.item}/>
                    <input onChange={this.handleChange} name='price' type="number"/>
                    <input onChange={this.handleChange} name='description' type="text"/>
                    <input onChange={this.handleChange} name='img' type="text"/>
                </div>
                <div className='buttons'>
                <button className="previous" onClick={() => this.props.previousFn()} >Previous</button>
                <button className="edit" onClick={() => this.props.toggle()} >Edit</button>
                <button className="add" onClick={() => this.props.addMenuItem(this.state)} >Add</button>
                <button className="delete" onClick={() => this.props.deleteFn(this.props.id)} >Delete</button>
                <button className="next" onClick={() => this.props.nextFn()} >Next</button>
                </div>
            </section>
        )
    }
}