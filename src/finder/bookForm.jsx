import '../styles/bookForm.css'
import React from 'react'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            props.handleSearch()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div id="bookForm">
            <div className='bookTitle'>
                <img className='bookImage' src="https://image.flaticon.com/icons/svg/29/29302.svg" alt="logo"/>
                <h1>Book Finder</h1>
            </div>
            <p className='bookText'>You don't need to know the name of the book, if you know the name of the author or publisher, just type, search and find it.</p>
            <div className='bookContent'>
                <input id='description' className='searchText'
                    placeholder='Type author, book name, subject ...'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}
                />

                <a className='searchButton' href="/#"
                   onClick={props.handleSearch}
                >
                    <i className="fa fa-search" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
