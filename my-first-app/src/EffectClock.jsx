export function EffectClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(id); // cleanup
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
