import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/action";
import Card from "../card/CardComponent";
import Loader from "../loader/loader.index";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {loading && <Loader />}
      {!loading &&
          (Object.keys(users).length === 0 &&
            users.constructor === Object) && <p>No users available!</p>}
      {!loading && error && <p>{error}</p>}
      {users.length > 0 &&
        users.map((user) => <Card key={user.id} user={user} />)}
    </React.Fragment>
  );
};

export default Users;
