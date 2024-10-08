import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Phones = () => {
    const phone = useLoaderData()
    return (
        <div>
            <h1>  All Phones Here:{phone.length}</h1>
            {
                phone.map(phone => <li key={phone.id}>
                    <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                </li>)
            }
        </div>

    )
}

export default Phones