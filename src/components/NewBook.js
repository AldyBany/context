import React , {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext';


const NewBook = () => {

    const{dispatch} = useContext(BookContext)
    const[title, setTitle] = useState('')
    const[author, setAuthor]  = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }})
        setTitle('')
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit} className="text-center d-flex flex-column">
            <input type="text" placeholder="Book Title" value={title} onChange={(e)=>setTitle(e.target.value)} required className="mb-2 p-2"/>
            <input type="text" placeholder="Author" value={author} onChange={(e)=>setAuthor(e.target.value)} required className="mb-2 p-2"/>
            <input type="submit" value='add book' className="bg-primary"/>
            
        </form>
     );
}
 
export default NewBook;