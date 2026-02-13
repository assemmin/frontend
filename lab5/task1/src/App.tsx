import UserCard from "./UserCard";
import SkillList from "./SkillList";
import { User, Skill } from "./types";

const user: User = {
  name: "Alice",
  email: "alice@mail.com",
  age: 25,
};

const skills: Skill[] = [
  { id: 1, name: "React", level: "Expert" },
  { id: 2, name: "TypeScript", level: "Intermediate" },
  { id: 3, name: "CSS", level: "Beginner" },
];

function App() {
  return (
    <div>
      <UserCard user={user} isActive={true}>
        <p>Bio: Frontend Developer</p>
      </UserCard>

      <SkillList skills={skills} />
    </div>
  );
}

export default App;