import React, {Component} from 'react'
import data from '../../server/menu'
import './App.css'

export default class DisplayData extends Component{
    constructor(){
        super()

        this.state = {
            menu: data,
            index: 0
        }
    }


    render(){
        return(
            <section>
                
            </section>
        )
    }
}