import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminView = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetcusers = async () => {
            try {
                let resposne = await fetch('https://aqib-a9ae691e09a3.herokuapp.com/api/v1/auth/getdata')
                const datanew = await resposne.json()
                setData(datanew)
            } catch (error) {
                console.log(error)
            }
        }
        fetcusers()
    }, [data])






    return (
        <div>
            <div className="flex justify-center items-center mb-4 p-10">
                <h1 className="text-xl font-bold text-center">USERS</h1>

            </div>

            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Position</th>
                        <th className="px-4 py-2">Role</th>


                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                            <td className='flex justify-center'>
                                {user.profilePicture && (
                                    <img className='w-32' src={`http://localhost:8000/${user.profilePicture}`} alt="" />
                                )}
                            </td>
                            <td className="border px-4 py-2">{`${user.firstname} ${user.lastname}`}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.position}</td>
                            <td className="border px-4 py-2">{user.role}</td>



                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminView;
