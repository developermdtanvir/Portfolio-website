import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ReactjsAlert from 'reactjs-alert';
export const ReviewBody = ({ item, handleDeleteItem }) => {
    const { name, messege, img, _id } = item;
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    return (
        <tbody>
            <tr>
                <th>
                    <label>
                        <button onClick={() => {
                            setStatus(true);
                            setType("error");
                            setTitle("This Review is Deleted Successfylly");
                            handleDeleteItem(_id)
                        }}><AiFillDelete className=' text-3xl' /></button>
                    </label>
                </th>
                <td>
                    <ReactjsAlert
                        status={status} // true or false
                        type={type} // success, warning, error, info
                        title={title}
                        quotes={true}
                        quote="This is a dummy design that shows an example of reactjs-alert"
                        Close={() => setStatus(false)}
                    />
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {messege}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </tbody >
    )
}
