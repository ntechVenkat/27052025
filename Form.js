import React, { useState } from "react";

const Form = (props) => {
  const [userData, updateUserData] = useState(props.formData);
  const [submitted, setSubmitted] = useState(false);

  let changeFormData = (e) => {
    const { name, value } = e.target;
    updateUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="userName">User Name</label>
          <br />
          <input
            type="text"
            id="userName"
            name="name"
            value={userData.name}
            onChange={changeFormData}
            autoComplete="off"
          />
          <br />
          {submitted && userData.name === "" && (
            <span className="text-danger">User Name Required</span>
          )}
        </div>
        {/* <br /> */}
        <div>
          <label htmlFor="userRole">User Role</label>
          <br />
          <input
            type="text"
            id="userRole"
            name="role"
            value={userData.role}
            onChange={changeFormData}
            autoComplete="off"
          />
          <br />
          {submitted && userData.role === "" && (
            <span className="text-danger">User Role Required</span>
          )}
        </div>
        <br />
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            props.cancel();
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={(e) => {
            e.preventDefault();
            setSubmitted(true);
            if (!!userData.name) props.add(userData);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
