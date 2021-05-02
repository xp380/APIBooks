// import React from 'react'

// export const Movie = ({ movie }) => {
//   const { original_title, overview, release_date } = movie


//   return(
//     <>
//     <h3>{original_title}</h3>
//     <p>{overview}</p>
//     <p>{release_date}</p>
//     </>
//   )
// }

import React from "react";

export const User = ({ user }) => {
  const { name, email, company, phone, address } = user;
  const { name: companyName } = company;
  const { zipcode: postal } = address;

  return (
    <>
      <h3>{name}</h3>
      <div>{email}</div>
      <div>{companyName}</div>
      <div>{phone}</div>
      <div>{postal}</div>
      {/* <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre> */}
    </>
  );
};

