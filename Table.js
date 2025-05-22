import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
    <div>
      <center>
        <table className="table table-bordered w-50 m-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.users?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      props.edit(item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      props.delete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Table;
