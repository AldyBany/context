import React , {useContext} from 'react'
import { BookContext } from '../contexts/BookContext';

import styled from 'styled-components'

const Details = styled.li`
    list-style: none;
`
const Title = styled.div``

const Author = styled.div``

const BookDetail = ({book}) => {

    const{dispatch} = useContext(BookContext)
    return ( 
       <Details  onClick={()=>dispatch({type: 'REMOVE_BOOK', id: book.id})} className="mb-3 bg-primary text-light rounded mx-auto px-auto">
           <Title className="text-dark h4">{book.title}</Title>
           <Author>{book.author}</Author>
       </Details>
     );
}
 
export default BookDetail;