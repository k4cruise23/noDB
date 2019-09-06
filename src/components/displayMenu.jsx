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
            index: 0
        }
    }

    componentDidMount(){
        axios.get('/api/menu').then(res => {
            this.setState({menu: res.data})
        })
    }

    addMenuItem(body) {
        axios.post('/api/menu', body).then(res => {
            this.setState({menu: res.data})
        })
    }

    deleteMenuItem(id) {
        axios.delete(`api/menu/${id}`).then(res => {
            this.setState({menu: res.data})
        })
    }

    editMenuItem(id, body) {
        axios.put(`/api/menu/${id}`, body).then(res => {
            this.setState({menu: res.data})
        })
    }


    render(){
        const{data, index} = this.state
        return(
            <section className='body'>
            <Navigation />
                <h3 className="index">{this.state.index+1}</h3>
                <h1 className='item' >{data[index].item}</h1>
                <h2 className="price">{data[index].price}</h2>
                <h2 className="description">{data[index].description}</h2>
                <img src={data[index].img} alt="food item"/>
            </section>
        )
    }
}