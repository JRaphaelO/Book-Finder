import '../styles/bookFinder.css'
import React, {Component} from 'react'
import BookForm from './bookForm'
import BookList from './bookList'
import axios from 'axios'

const URL = 'https://www.googleapis.com/books/v1/volumes?q='

export default class BookFinder extends Component {
    
    constructor(props) {
        super(props)

        this.state = {description: '', list: []}
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    refresh(description = ''){
        const search = description ? `${description}&callback` : ''
        console.log(`${URL}${search}`)
        axios.get(`${URL}${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data.items}))
    }

    handleChange(desc) {
        console.log("Change")
        this.setState({...this.state, description: desc.target.value})
    }

    handleSearch() {
        console.log("Search")
        this.refresh(this.state.description)
    }

    handleClear() {
        console.log("Clear")
        this.setState({...this.state, description: '', list: []})
    }
    
    render(){
        return (
            <section id='BookFinder'>
                <BookForm 
                    description={this.state.description}
                    handleChange = {this.handleChange}
                    handleSearch = {this.handleSearch}
                    handleClear = {this.handleClear} 
                />
                <hr/> 
                <BookList list={this.state.list}/>
            </section>
        )
    }
}