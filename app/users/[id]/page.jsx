const getUser = async (id) =>{

    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

//With "params" you get access to all the parameters
const UsersPage = async ({params}) => {

    const user = await getUser(params.id);

    return(
        <div>
            <h1>User Details</h1>
            <div>
                <img src={user.avatar} alt={user.first_name} />
                <h3>{user.id} {user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus earum perferendis! Recusandae magnam, voluptatem aperiam doloremque odio est eum.</p>
        </div>
    )
}

export default UsersPage;