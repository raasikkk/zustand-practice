import { useEffect } from "react";
import "./App.css";
import { useCounterStore, useMessageStore } from "./store";

function setLog() {
  useCounterStore.setState({ count: 3 });
}

function App() {
  const { count } = useCounterStore((state) => state);
  const { message } = useMessageStore((state) => state);

  return <OtherComponent count={count} message={message} />;
}

const OtherComponent = ({
  count,
  message,
}: {
  count: number;
  message: string;
}) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  const firstChange = useMessageStore((state) => state.firstChange);
  const secondChange = useMessageStore((state) => state.secondChange);

  useEffect(() => {
    setLog();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={incrementAsync}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <h3>{message}</h3>
      <div>
        <button
          className={`${message === "ualeikum" ? "custom-style" : ""}`}
          onClick={firstChange}
        >
          Change me
        </button>
        <button
          className={`${message === "salam" ? "custom-style" : ""}`}
          onClick={secondChange}
        >
          Change me
        </button>
      </div>
    </>
  );
};

export default App;
