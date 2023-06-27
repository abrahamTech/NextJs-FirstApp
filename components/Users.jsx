const Users = ({ users }) => {
    return (
        <ul>
            {
                users.map((user) => (
                    <li>
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