import { User } from "./types";

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}

const UserCard = ({
  user,
  isActive = true,
  children,
}: UserCardProps) => {
  return (
    <div
      style={{
        opacity: isActive ? 1 : 0.5,
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2>{user.name}</h2>
      <p>
        {user.email} | Age: {user.age}
      </p>

      {children}
    </div>
  );
};

export default UserCard;