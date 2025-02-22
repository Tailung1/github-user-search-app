import { useEffect, useState } from "react";

import "./App.css";

type TUser = {
  name: string | null;
  login: string | null;
};

function App() {
  const [user, setUser] = useState<TUser | null>(null);

  const [search, setSearch] = useState<string>("");
  useEffect(() => setUser({ name: "Tailung1", login: "tailung1" }), []);

  const fetchFunc = async () => {
    if (!search.trim()) return;
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {}
  };
  const handleClear = () => {
    setSearch("");
    setUser(null);
  };
  return (
    <>
      <input
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        type="text"
      />
      <button onClick={fetchFunc}>Search user</button>
      <button onClick={handleClear} style={{ marginLeft: "10px" }}>
        Clear Input
      </button>
      <h1>{user?.name ?? "User Name will appear here"}</h1>
      <h2>{user?.login ?? "User Login will apprear here"}</h2>
    </>
  );
}

export default App;
