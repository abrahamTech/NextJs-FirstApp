//We declare that it is a "client component" to be able to use the onClick()
"use client";

import { useRouter } from "next/navigation";

const Users = ({ users }) => {

    const router = useRouter();

    return (
        <ul className="list-group">
            {
                users.map((user) => (
                    <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                        onClick={() => {
                            router.push(`/users/${user.id}`);
                        }}
                    >
                        <div>
                            <h3>#{user.id} {user.first_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                        <img 
                            src={user.avatar} 
                            alt={user.first_name} 
                            style={{borderRadius: "50%"}}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default Users;