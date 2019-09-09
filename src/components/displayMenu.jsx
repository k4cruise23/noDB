import React, {Component} from 'react'
import data from './Menu'
import '../App.css'
import axios from 'axios'
import Navigation from './Navigation'

export default class DisplayMenu extends Component{
    constructor(){
        super()

        this.state = {
            data: data,
            index: 0,
            id: 0,
            toggleEdit: false,
            descriptionInput: ''
        }
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
        this.deleteMenuItem = this.deleteMenuItem.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addMenuItem = this.addMenuItem.bind(this)
    }

    componentDidMount(){
        axios.get('/api/menu').then(res => {
            this.setState({data: res.data})
        })
    }
    //componentDidMount displays the data as soon as the page loads

    addMenuItem(body) {
        axios.post('/api/menu', body).then(res => {
            this.setState({data: res.data})
        })
    }

    deleteMenuItem(id) {
        // console.log(id)
        axios.delete(`/api/menu/${id}`).then(res => {
            // console.log(res.data)
            this.setState({data: res.data})
        })
    }

    editMenuItem(id) {
        const {descriptionInput} = this.state
        axios.put(`/api/menu/${id}`, {description: descriptionInput}).then(res => {
            this.setState({data: res.data})
        })
    }

    previous = () => {
        if(this.state.index === 0){
            this.setState({index: 6})
            return
        }
        this.setState({index: this.state.index-1})
    }

    next = () => {
        if(this.state.index === 6){
            this.setState({index: 0})
            return
        }
        this.setState({index: this.state.index+1})
    }

    toggle() {
        const{data, index} = this.state
        this.setState(prevState => ({toggleEdit: !prevState.toggleEdit}))
        this.editMenuItem(data[index].id)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        const{data, index} = this.state
        // console.log(this.state.descriptionInput)
        //ternary: if toggle edit is not true, display description. Else return text area input and change description
        return(
            <section className='body'>
                <div className='menuItems'>
                <div className='text'>
                <h1 className='item' >{data[index].item}</h1>
                <h2 className="price">{data[index].price}</h2>
                {!this.state.toggleEdit ? (
                    <h2 className="description">{data[index].description}</h2> 
                    
                ) : (
                    <div>
                        <textarea onChange={this.handleChange} name="descriptionInput" id="" cols="50" rows="6" defaultValue={data[index].description}></textarea>
                    </div>
                )}
                </div>
                <div className='imgParent'>
                <img className='img' src={data[index].img} alt="food item"/>
                </div>
                </div>
            <Navigation 
            nextFn={this.next}
            previousFn={this.previous}
            deleteFn={this.deleteMenuItem}
            id = {data[index].id }
            toggle = {this.toggle}
            handleChange = {this.handleChange}
            toggleEdit = {this.state.toggleEdit}
            addMenuItem={this.addMenuItem}/>
            </section>
        )
        //Navigation is having all the functions passed down as props '<Navigation />'
    }
}


