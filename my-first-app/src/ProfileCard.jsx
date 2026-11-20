export function ProfileCard({
  name = "Anonymous",
  role = "Member",
  avatarUrl = "https://placehold.co/80",
  isOnline = false,
}) {
  return (
    <div className="card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <span>{isOnline ? "🟢 Online" : "⚪ Offline"}</span>
    </div>
  );
}
