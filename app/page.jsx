//Instead of use an "useEffect" we use an Arrow Function
const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  //1.- console.log(data.data);
  return data.data;
}

//React Server Component (Use of Async/Await)
async function IndexPage(){
  //Shows the info from the API in the Console of VS. It's because it is being canceled from the server, not from the front end.
  //1.- fetchUsers();

  //2.-
  const users = await fetchUsers();
  console.log(users);

  return (
    <div>
      <h1>Index Page</h1>
      <div>
        {JSON.stringify(users)}
      </div>
    </div>
  )
}

export default IndexPage;