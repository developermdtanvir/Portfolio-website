import React, { useContext, useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import ReactjsAlert from 'reactjs-alert';
import { AuthContext } from './../../../Contexts/AuthProvider/AuthProvider';
export const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [service, setService] = useState({});
    const [commant, setCommant] = useState([]);
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");


    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = user?.email || e.target.email.value
        const messege = e.target.messege.value
        const photoURL = user.photoURL || e.target.photoURL.value;
        const userInfo = {
            name,
            email,
            messege,
            img: user?.photoURL || photoURL,
            service: id
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)

        }).then(res => res.json())
            .then(data => console.log(data));

    }
    useEffect(() => {
        fetch(`http://localhost:5000/review?id=${id}`)
            .then(res => res.json())
            .then(data => setCommant(data));
    }, [id])
    console.log(commant);
    return (
        <div className=' flex w-full'>

            <div className=' w-3/4 pt-32'>
                <div className=' w-80 m-10'>
                    {
                        commant.map(comment => <div className=' border-2 grid grid-rows-3 m-2 space-y-10'>
                            <div className=' flex'><img className=' w-20 rounded-md' src={comment.img} alt='' />
                                <h1> {comment.name}</h1></div>
                            <p>comment : {comment.messege}</p>
                        </div>)
                    }
                </div>
                <form onSubmit={handleSubmit} className=' grid grid-cols-2 gap-10'>
                    <input required name='name' type='text' placeholder='Name' className=' input input-primary' />
                    <input name='email' defaultValue={user.email} readOnly type='email' placeholder='Email' className=' input input-primary' />
                    {user.photoURL ? <></> : <input required name='photoURL' type='text' placeholder='PhotoURL' className=' input input-primary' />}
                    <textarea required placeholder='messege.......' name='messege' className=' textarea textarea-primary' />
                    <input onClick={() => {
                        setStatus(true);
                        setType("success");
                        setTitle("This is a success alert");
                    }} className=' btn btn-primary' value='submit' type='submit' />
                </form>

                <ReactjsAlert
                    status={status} // true or false
                    type={type} // success, warning, error, info
                    title={title}
                    quotes={true}
                    quote="This is a dummy design that shows an example of reactjs-alert"
                    Close={() => setStatus(true)}
                />
            </div>
            <div className="card card-compact w-1/4 py-20 shadow-xl my-40">
                <figure className=' p-3'>
                    <img src={service.img} className='rounded-md' alt='' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex"><TbCurrencyTaka />{service.price}</h2>
                    <h2 className=' text-xl font-bold'>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
