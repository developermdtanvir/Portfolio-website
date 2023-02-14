import { } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ServiceCard } from './ServiceCard';
export const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState("")
    const inputRef = useRef()
    const searchBtn = () => {
        setSearch(inputRef.current.value);
    }
    console.log(search);
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${3}&orderd=${isAsc ? 'asc' : 'dsc'}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setServices(data)
            })
    }, [isAsc, search])
    return (
        <div className=' p-10 space-y-10'>
            <input type='text' className=' input input-md' ref={inputRef} />
            <button onClick={searchBtn}>Search</button>

            <button className=' btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'Desc' : 'Asc'}</button>
            {loading && <Spinner className=' mx-auto' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 '>
                {
                    services.map(service => <ServiceCard service={service} />)
                }
            </div>
            <div className=' text-center'>
                <Link to='/services'><h1 className=' text-4xl'>SeeAll</h1></Link>
            </div>
        </div>
    )
}
