import React from 'react';
import fetchData from './fetchData';

const UserTable = ({ data }) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDate = (date) => {
    return formatter.format(new Date(date));
  };

  return (
    <div className="table-responsive bg-dark-gray rounded">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Location</th>
            <th scope="col">Joined</th>
            <th scope="col">Permissions</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="d-flex align-items-center">
                <img 
                  alt="User avatar" 
                  className="rounded-circle mr-2" 
                  height="32" 
                  src="https://avatar.iran.liara.run/public/35" 
                  width="32" 
                />
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{formattedDate(user.createdAt)}</td>
              <td>
                <span className={`badge ${user.role === "admin" ? "bg-danger" : user.role === "contributor" ? "bg-primary" : "bg-dark"}`}>
                  {user.role}
                </span>
              </td>
              <td className="text-right">
                <i className="fas fa-ellipsis-h"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default fetchData(UserTable, 'http://localhost:3000/users');
