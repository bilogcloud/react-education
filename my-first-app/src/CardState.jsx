export function CartButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Add to cart</button>;
}

export function CartBadge() {
  const [count, setCount] = useState(0);
  return <span>🛒 {count}</span>;
}

export function App() {
  return (
    <div>
      <CartBadge />
      <CartButton />
    </div>
  );
}
