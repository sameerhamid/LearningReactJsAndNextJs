// import styled from "styled-components";

// // & if used with space it will target its chilrens else without space it will be targe itself for psuedo selectors
// const StyledButton = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;

// export default StyledButton

import React from "react";

function Button({ children, ...props }) {
  return (
    <button {...props} className="px-4 py-2 
    font-semibold uppercase rounded
    text-stone-900
    bg-amber-400
    hover:bg-amber-500
    ">
      {children}
    </button>
  );
}

export default Button;
