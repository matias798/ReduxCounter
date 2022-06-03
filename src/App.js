import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./index.scss";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="flexCenter">
        <h1 className="text-center">Simple Counter</h1>
      </div>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      {counter}

      <button className="buttonCLass" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}

export default App;
