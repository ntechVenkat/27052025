/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData, deleteUsersData } from "./api";

const ComponentStore = () => {
  const dispatch = useDispatch();

  const storeData = useSelector((state) => state.users);
  console.log(storeData);

  //   useEffect(() => {
  //     getUsers();
  //   }, []);

  const getUsers = async () => {
    const usersData = await getUsersData();
    dispatch({ type: "GET_UPDATED_USERS_DATA", payload: usersData.data });
    // console.log(usersData.data);
  };

  const deleteUser = async () => {
    await deleteUsersData();
    getUsers();
  };
  return (
    <div>
      <h1>Component Store</h1>
      <button className="m-2" onClick={getUsers}>
        GET
      </button>
      <button className="m-2">POST</button>
      <button className="m-2">PUT</button>
      <button
        className="m-2"
        onClick={() => {
          deleteUser();
        }}
      >
        DELETE
      </button>
      {storeData?.map((eachUser) => (
        <li key={eachUser.id}>{eachUser.name}</li>
      ))}
    </div>
  );
};
export default ComponentStore;
