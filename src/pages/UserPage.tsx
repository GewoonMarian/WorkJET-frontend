import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { AppDispatch } from "../store";
import { fetchUsers } from "../store/user/actions";
import { selectUsers } from "../store/user/selectors";
import { User } from "../types";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.users);
  const users = useSelector(selectUsers);
  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>UsersPage</h1>
      {users
        ? users.users.map((user: User) => {
            return (
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      backgroundColor: "#212529",
                      boxShadow: "5px 40px 60px #26ff04",
                      color: "#52be67",
                    }}
                  >
                    <UserCard
                      id={user.id}
                      name={user.name}
                      email={user.email}
                      location={user.location}
                      isAvailable={user.isAvailable}
                      imageUrl={user.imageUrl}
                      description={user.description}
                    />
                  </div>
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}
