import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import UserTable from "./userTable";
import Users from "./users";

const App = props => {
  const [postState, setPostsState] = useState([]);
  const [userState, setUserState] = useState([]);
  const [selectedPost, setSelectedPostState] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setPostsState([...json]);
      })
      .catch(e => console.log(e));
  }, []);

  const getDetailsHandler = id => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(response => response.json())
      .then(json => {
        setUserState(json);
        setSelectedPostState(postState.filter(item => item.id === id));
        console.log(json);
        props.history.push("/user");
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      <Route
        exact
        path="/user"
        component={() => {
          return <Users user={userState} post={selectedPost} />;
        }}
      />
      <Route
        exact
        path="/"
        component={() => {
          return <UserTable posts={postState} getDetails={getDetailsHandler} />;
        }}
      />
    </div>
  );
};

export default App;
