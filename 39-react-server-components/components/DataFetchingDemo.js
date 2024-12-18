import fs from "node:fs/promises";
const DataFetchingDemo = async () => {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users = JSON.parse(data);
  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <code>await fs.readFile("dummy-db.json", "utf-8")</code>
      </p>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingDemo;
