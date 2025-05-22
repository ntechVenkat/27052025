import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, deleteData, postData, putData } from "./api.js";
import Table from "./Table.js";
import Form from "./Form";

const App = () => {
  //   const [products, setProducts] = useState([]);
  const [form, setForm] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
  });
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    let res = await getData();
    // setProducts(res.data);
    // console.log(res.data);
    dispatch({ type: "GET_UPDATED_USERS_DATA", payload: res.data });
  };

  let addUser = async (user) => {
    let data = {
      name: user.name,
      role: user.role,
    };
    if (editStatus) {
      await putData(user.id, data);
      getUsers();
      setForm(false);
    } else {
      await postData(data);
      getUsers();
      setForm(false);
    }
  };

  let editUser = (data) => {
    setForm(true);
    setFormData(data);
    setEditStatus(true);
  };

  let deleteUser = async (id) => {
    await deleteData(id);
    getUsers();
  };
  let cancelForm = () => {
    setForm(false);
  };

  return (
    <div>
      <center>
        <div className="container d-flex flex-row justify-content-center mt-2">
          <h2 className="col-8">
            App Users Data through Redux in Table by using API
          </h2>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              setForm(true);
              setFormData(formData);
            }}
          >
            Add
          </button>
        </div>
        {form && <Form cancel={cancelForm} formData={formData} add={addUser} />}
        <Table users={users} delete={deleteUser} edit={editUser} />
      </center>
    </div>
  );
};
export default App;
