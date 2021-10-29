import React, { useState, useEffect } from "react";

const Listar = () => {

    useEffect(() => {
        fetchUsers();
    },[])

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await fetch('https://mcga-tn-caldar.herokuapp.com/users/showall_user');

        const users = await data.json();
        console.log(users);

        setUsers(users);
    }
    
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>
                            Orden
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Rol
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.adress}</td>
                            <td>{user.rol.description}</td>
                        </tr>
                    ))}
                </tbody>          
            </table>    
        </div>
    );
};

export default Listar;