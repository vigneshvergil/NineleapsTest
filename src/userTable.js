import React from "react";

const userTable = props => {
  return (
    <div>
      <h1>Posts</h1>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
          </tr>
          {props.posts &&
            props.posts.map((item, key) => {
              return (
                <tr key={key} onClick={() => props.getDetails(item.id)}>
                  <td>{item.id}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default userTable;
