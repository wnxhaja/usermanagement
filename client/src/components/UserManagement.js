import React from 'react';
import UserTable from './UserTable';

const UserManagement = () => {
  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">User Management</h1>
        <div className="d-flex">
          <button className="btn btn-secondary mr-2">Export</button>
          <button className="btn bg-orange text-white">+ New User</button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="d-flex mb-4">
        <input 
          className="form-control bg-dark-gray text-white mr-2" 
          placeholder="Search items..." 
          type="text" 
        />
        <select className="form-control bg-dark-gray text-white mr-2">
          <option>Permissions All</option>
        </select>
        <select className="form-control bg-dark-gray text-white">
          <option>Joined Anytime</option>
        </select>
      </div>

      {/* User Table */}
      <UserTable />

      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex">
          <button className="btn btn-secondary mr-1">1</button>
          <button className="btn btn-dark mr-1">2</button>
          <button className="btn btn-dark mr-1">3</button>
          <button className="btn btn-dark mr-1">4</button>
          <button className="btn btn-dark mr-1">...</button>
          <button className="btn btn-dark">10</button>
        </div>
        <div>
          <span>Show:</span>
          <select className="form-control bg-dark-gray text-white d-inline-block w-auto ml-2">
            <option>10 rows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
