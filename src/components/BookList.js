import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

import styled from 'styled-components'

const Booklist = styled.div`

`

const BookList = () => {

    const{books} = useContext(BookContext)
    return books.length? ( 
        <Booklist className="">
            <ul className="">
                {books.map(book=>{
                    return (
                        <BookDetails book={book} key={book.id}/>
                    )
                })}
            </ul>
        </Booklist>
        
     ):(
         <div className="text-center">No Book to rEAD</div>
     )
}
 
export default BookList;