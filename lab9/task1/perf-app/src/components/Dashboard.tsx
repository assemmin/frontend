import { useState } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ParentComponent } from "./Button";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  const [count, setCount] = useState(0);

  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });

  const [items] = useState(["item1", "item2", "item3"]);

  console.log("Dashboard render");

  return (
    <div>
      <h1>Dashboard (count: {count})</h1>

      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>

      <UserCard user={user} />

      <AnalyticsChart items={items} />

      <ParentComponent />
    </div>
  );
}