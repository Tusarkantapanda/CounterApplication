import React,{Fragment} from 'react';

const Clock = ({time,minute,second})=>{
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                        <p>{("0"+Math.floor((time/6000)%60)).slice(-2)}</p>
                            <small>Hour</small>
                        </section>{" "}
                  <span>:</span>
                        <section>
                        <p>{("0"+Math.floor((time/600)%60)).slice(-2)}</p>
                            <small>Minute</small>
                        </section>{" "}
                  <span>:</span>
                        <section>
                        <p>{("0"+((time/10)%60)).slice(-2)}</p>
                            <small>Second</small>
                        </section>{" "}
                    </div>
                </section>
            </section>
        </Fragment>
    )
}


Clock.defaultProps={
    timerHours:0,
    timerMinutes:0,
    timerSeconds:0
}
export default Clock;