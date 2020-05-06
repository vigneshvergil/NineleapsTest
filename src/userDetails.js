import React from "react";

const UserDetails = props => {
  return (
    <div>
      <table className={"userTable"}>
        <tbody>
          {props.user &&
            Object.keys(props.user).map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item}</td>
                  <td>
                    {typeof props.user[item] === "object" ? (
                      <UserDetails user={props.user[item]} />
                    ) : (
                      props.user[item]
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
