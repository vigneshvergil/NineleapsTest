import React, { useRef } from "react";
import UserDetails from "./userDetails";

const Users = props => {
  return (
    <div>
      <h1>Post</h1>
      {props.post && (
        <table>
          <tr>
            <td>Title</td>
            <td>{props.post[0].title}</td>
          </tr>
          <tr>
            <td>Post</td>
            <td>{props.post[0].body}</td>
          </tr>
        </table>
      )}
      <h1>User Details</h1>
      <UserDetails user={props.user} />
    </div>
  );
};

export default Users;
