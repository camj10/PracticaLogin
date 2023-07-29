import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button type="button" class="btn btn-outline-primary"><Link to='/personas/agregar'>Agregar persona</Link></button>
            <button type="button" class="btn btn-outline-primary"><Link to='/personas/login'>Login</Link></button>
        </>
    )
}

export default Home