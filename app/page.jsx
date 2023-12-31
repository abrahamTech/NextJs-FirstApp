//Import Users Component
import Users from "@/components/Users";

//Instead of use an "useEffect" we use an Arrow Function
const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

//React Server Component (Use of Async/Await)
async function IndexPage(){

  const users = await fetchUsers();

  return (
      <Users users={users} />
  )
}

export default IndexPage;