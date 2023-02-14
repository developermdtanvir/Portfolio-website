import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { ReviewBody } from './ReviewBody';

export const Review = () => {

    const { user, useDocumentTitle } = useContext(AuthContext);
    useDocumentTitle('Review page')
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`, {
            headers: {
                authorizetion: `Bearr ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {

            console.log(data);
            setReview(data)
        });
    }, [user])
    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remeanning = review.filter(item => item._id !== id)
                    setReview(remeanning);
                }
            });


    }
    return (
        <div className="overflow-x-auto w-full pt-40">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    review.map(item => <ReviewBody handleDeleteItem={handleDeleteItem} item={item} />)
                }
            </table>
        </div>
    )
}
