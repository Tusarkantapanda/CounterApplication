import React, { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./Component/Card";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { increment1 } from "./actions";
import { increment2 } from "./actions";
import { increment3 } from "./actions";

function App() {
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  const counter = useSelector((state) => state.counter);
  const secondCount = useSelector((state) => state.secondCount);
  const thirdCount = useSelector((state) => state.thirdCount);
  const fourthCount = useSelector((state) => state.fourthCount);
  const dispatch = useDispatch();
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSecond((prevTime) => prevTime + 10);
    }, 1000);

    interval = setInterval(() => {
      setMinute((prevTime) => prevTime + 10);
    }, 1000);

    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, [timerOn]);

  const [times, setTimes] = useState(0);
  const [timersOn, setTimesOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timersOn) {
      interval = setInterval(() => {
        setTimes((prevTime) => prevTime + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timersOn]);


  const [times1, setTimes1] = useState(0);
  const [timers1On, setTimes1On] = useState(false);
  useEffect(() => {
    let interval = null;

    if (timers1On) {
      interval = setInterval(() => {
        setTimes1((prevTime) => prevTime + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timers1On]);



  const [times2, setTimes2] = useState(0);
  const [timers2On, setTimes2On] = useState(false);
  useEffect(() => {
    let interval = null;

    if (timers2On) {
      interval = setInterval(() => {
        setTimes2((prevTime) => prevTime + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timers2On]);


  const [times3, setTimes3] = useState(0);
  const [timers3On, setTimes3On] = useState(false);
  useEffect(() => {
    let interval = null;

    if (timers3On) {
      interval = setInterval(() => {
        setTimes3((prevTime) => prevTime + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timers3On]);


  return (
    <div className="App">
      <nav>
        <Clock time={time} minute={minute} second={second} />
      </nav>
      <div className="div-box" onClick={() => dispatch(increment())}>
        <div className="two">
          <h3>{counter}</h3>
          <div>
            <div>
              <span>{("0" + Math.floor((times / 6000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((times / 600) % 60)).slice(-2)}:</span>
              <span>{("0" + ((times / 10) % 60)).slice(-2)}</span>
            </div>
            <div>
              <button onClick={() => setTimesOn(true)}>Start</button>
            </div>
          </div>
        </div>
      </div>

      <div className="div-box" onClick={() => dispatch(increment1())}>
        <div className="two">
          <h3>{secondCount}</h3>
          <div>
            <div>
              <span>{("0" + Math.floor((times1 / 6000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((times1 / 600) % 60)).slice(-2)}:</span>
              <span>{("0" + ((times1 / 10) % 60)).slice(-2)}</span>
            </div>
            <div>
              <button onClick={() => setTimes1On(true)}>Start</button>
            </div>
          </div>
        </div>
      </div>

      <div className="div-box" onClick={() => dispatch(increment2())}>
        <div className="two">
          <h3>{thirdCount}</h3>
          <div>
            <div>
              <span>{("0" + Math.floor((times2 / 6000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((times2 / 600) % 60)).slice(-2)}:</span>
              <span>{("0" + ((times2 / 10) % 60)).slice(-2)}</span>
            </div>
            <div>
              <button onClick={() => setTimes2On(true)}>Start</button>
            </div>
          </div>
        </div>
      </div>

      <div className="div-box" onClick={() => dispatch(increment3())}>
        <div className="two">
          <h3>{fourthCount}</h3>
          <div>
            <div>
              <span>{("0" + Math.floor((times3 / 6000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((times3 / 600) % 60)).slice(-2)}:</span>
              <span>{("0" + ((times3 / 10) % 60)).slice(-2)}</span>
            </div>
            <div>
              <button onClick={() => setTimes3On(true)}>Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// {`${("0"+Math.floor((time/6000)%60)).slice(-2)}:${("0"+Math.floor((time/600)%60)).slice(-2)}:${("0"+((time/10)%60)).slice(-2)}`}
