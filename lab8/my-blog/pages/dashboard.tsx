import { GetServerSideProps } from "next";
import { getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

export default function Dashboard({ user, notifications, analytics, currentTime }: any) {

  const unread = notifications.filter((n: any) => !n.read).length;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>

      <h2>Analytics</h2>
      <p>Page Views: {analytics.pageViews}</p>
      <p>Sessions: {analytics.sessions}</p>
      <p>Bounce Rate: {analytics.bounceRate.toFixed(1)}%</p>

      <h2>Notifications ({unread})</h2>
      <ul>
        {notifications.map((n: any) => (
          <li key={n.id}>
            {n.message}
          </li>
        ))}
      </ul>

      <p>Last updated: {currentTime}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};