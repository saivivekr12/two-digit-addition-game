import { useEffect, useState } from "react";

function  useTimer(stopCounter,index) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
     if(stopCounter!==0&&index!==9){
    const interval = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes => minutes + 1);
      } else {
        setSeconds(seconds => seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }
     }
  }, [seconds, minutes]);

  return {
    seconds,
    minutes
  }
}

export default useTimer