const getUser = async (id) =>{

    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

//With "params" you get access to all the parameters
const UsersPage = async ({params}) => {

    const user = await getUser(params.id);

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <img src={user.avatar} alt={user.first_name} />
                    </div>
                    <div className="card-body text-center">
                        <h3>{user.id} {user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus earum perferendis! Recusandae magnam, voluptatem aperiam doloremque odio est eum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;