import React, { useEffect, useState } from "react";
import { getUsers } from "../service/userService";
import { IUser } from "../types/UserType";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); // Gọi API lấy danh sách User
        setUsers(data);
      } catch (err) {
        setError((err as Error).message); // Xử lý lỗi
      }
    };

    fetchUsers();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
