import React from 'react';

const Title = ({ text }) => {
  return (
    <div>
      <h1>{text || "Title Here"}</h1>
    </div>
  );
}

export default Title;
