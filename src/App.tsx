import { useEffect, useState } from "react";
import axios from "axios";

interface userData {
    created_at:string
}
export default function App() {
  const [user, setUser] = useState<userData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "https://api.github.com/users/Tailung1"
      );
      if (response.status === 200) {
        const data = await response.data;
        setUser(data);
      }
    };
    fetchUser();
  }, []);
  return <div>{user?.created_at || " cant found"}</div>;
}
