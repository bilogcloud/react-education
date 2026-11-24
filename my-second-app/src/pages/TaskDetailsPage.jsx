import { useParams } from "react-router";

export function TaskDetailsPage() {
  const { id } = useParams();

  // fetch details from BE by ID

  return <h1>Task details ID: {id}</h1>;
}
