import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UserPromises from "@/components/UserPromises";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      {/* <DataFetchingDemo />
      <ServerActionsDemo /> */}

      <Suspense fallback={<p>Loading users...</p>}>
        <UserPromises />
      </Suspense>
    </main>
  );
}
