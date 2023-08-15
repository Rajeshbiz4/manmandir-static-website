import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";
import PostsList from "./postList";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      {" "}
      Home
      {/* <PostsList /> */}
      {/* <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div> */}
    </>
  );
};

export default Home;
