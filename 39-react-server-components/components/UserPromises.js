// import fs from "node:fs/promises";
// const UserPromises = async () => {
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
//   const data = await fs.readFile("dummy-db.json", "utf-8");
//   const users = JSON.parse(data);
//   return (
//     <div className="rsc">
//       <h2>RSC with data fetching</h2>
//       <p>
//         User <strong>async / await</strong>
//         for data fetching.
//       </p>
//       {users.map((user) => (
//         <li>
//           {user.name} ({user.title})
//         </li>
//       ))}
//     </div>
//   );
// };

// export default UserPromises;

"use client";

import { use } from "react";

const UserPromises = ({ usersPromise }) => {
  const users = use(usersPromise);
  return (
    <div className="rsc">
      <h2>RSC with data fetching</h2>
      <p>
        User <strong>async / await</strong>
        for data fetching.
      </p>
      {users.map((user) => (
        <li>
          {user.name} ({user.title})
        </li>
      ))}
    </div>
  );
};

export default UserPromises;
