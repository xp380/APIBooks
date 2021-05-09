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

export const Movie = ({ movie }) => {
  const { original_language, title, overview, release_date } = movie;
  

  return (
    <>
      <h3>{title}</h3>
      <div>{original_language}</div>
      <div>{overview}</div>
      <div>{release_date}</div>
    </>
  );
};

