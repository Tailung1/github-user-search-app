import { useEffect, useState } from "react";

import "./App.css";

type TUser = {
    name:string  | null
    login :string | null

}

function App() {
  const [user, setUser] = useState<TUser | null>(null);

  const [search,setSearch]=useState<string>("")

  const fetchFunc = async () => {
    try {
        const response= await fetch(`https://api.github.com/users/${search}`)
        const jsonData= await response.json()
        setUser(jsonData)
    } catch(error){}
  };
  return (
    <>
      <input onChange={(event) => setSearch(event.target.value)} type="text" />
      <button onClick={fetchFunc}>Search user</button>
      <h1>{user?.name ?? "Loading"}</h1>
      <h2>{user?.login ?? "Loading"}</h2>
    </>
  );
}

export default App;
