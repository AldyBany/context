import React,{useContext} from 'react'

import styled from 'styled-components'
import { BookContext } from '../contexts/BookContext';

const Nav = styled.div`
    
`

const Navbar = () => {

    const{books} = useContext(BookContext)
    return ( 
        <Nav className="mb-4 bg-danger rounded text-light">
            <h1 className="mb-3">Ninja Reading List</h1>
            <p>Currently you have {books.length} books to get through</p>
        </Nav>

     );
}
 
export default Navbar;