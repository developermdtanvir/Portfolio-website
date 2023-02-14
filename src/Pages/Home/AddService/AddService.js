import React from 'react'

export const AddService = () => {
    const handleServiceAdd = (e) => {
        const title = e.target.title.value
        const img = e.target.photoURL.value
        const description = e.target.description.value
        const price = e.target.price.value;
        const createService = {
            title,
            img,
            description,
            price
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createService)
        })
            .then(res => res.json())
            .then(data => console.log(data));
        console.log(createService);
        e.preventDefault()
    }
    return (
        <form onSubmit={handleServiceAdd} className=' p-40 grid grid-cols-2 gap-10'>
            <input name='title' type="text" placeholder="Title" className="input input-bordered input-success w-full max-w-xs" />
            <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered input-success w-full max-w-xs" />
            <input name='description' type="text" placeholder="Description" className="input input-bordered input-success w-full max-w-xs" />
            <input name='price' type="number" placeholder="Price" className="input input-bordered input-success w-full max-w-xs" />
            <input type="submit" value='submit' className="input input-bordered input-success w-full max-w-xs" />
        </form>
    )
}
