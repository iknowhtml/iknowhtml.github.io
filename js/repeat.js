var repeat = (callback, interval, repetitions, delay) => {
  function repeater(repetitions){
    if(repetitions != 0){
      callback.apply(null, arguments);
      setTimeout(() => repeater(repetitions - 1)
      , interval);
    }
  }
  if(delay){
    setTimeout(() => repeater(repetitions), delay);
  }
  else{
    repeater(repetitions);
  }
}

export default repeat;
