export function BrokenCounter() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log("count is now:", count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
