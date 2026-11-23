import { useState } from "react";

export function ProfileCard({ fullName, description = "N/A", salary }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ border: "1px solid white", padding: "10px", width: "200px" }}>
      <p>Name: {fullName}</p>
      <p>Position: {description}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
      {showMore && (
        <div>
          <p>Salary: {salary} EUR</p>
        </div>
      )}
    </div>
  );
}
