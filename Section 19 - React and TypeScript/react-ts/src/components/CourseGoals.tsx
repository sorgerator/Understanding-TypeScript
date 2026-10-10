import { type CourseGoal } from "../App";

interface CourseGoalsProps {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
}

export default function CourseGoals({ goals, onDelete }: CourseGoalsProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
}
