export function CartButton({ setCount }) {
  const handleClick = () => {
    // setCount(count => count + 1);
    setCount((previousValue) => previousValue + 1);
  };

  return <button onClick={handleClick}>Add to cart</button>;
}
