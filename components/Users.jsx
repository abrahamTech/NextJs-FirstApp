//We declare that it is a "client component" to be able to use the onClick()
"use client";

import { useRouter } from "next/navigation";

const Users = ({ users }) => {

    const router = useRouter();

    return (
        <ul>
            {
                users.map((user) => (
                    <li
                        onClick={() => {
                            router.push(`/users/${user.id}`);
                        }}
                    >
                        <div>
                            <h3>#{user.id} {user.first_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                        <img src={user.avatar} alt={user.first_name} />
                    </li>
                ))
            }
        </ul>
    )
}

export default Users;