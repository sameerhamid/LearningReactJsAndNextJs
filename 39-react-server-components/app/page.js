import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UserPromises from "@/components/UserPromises";
import { Suspense } from "react";
import fs from "node:fs/promises";
export default async function Home() {
  const fetchingUsersPromise = await new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      resolve(JSON.parse(data));
    }, 1500)
  );

  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      {/* <DataFetchingDemo />
      <ServerActionsDemo /> */}

      <Suspense fallback={<p>Loading users...</p>}>
        <UserPromises usersPromise={fetchingUsersPromise} />
      </Suspense>
    </main>
  );
}
