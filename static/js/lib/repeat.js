const repeat = (callback, interval, repetitions, delay) => {
  let expected = Date.now();
  function repeater(repetitions) {
    if  (repetitions != 0) {
      const dt = Date.now() - expected;
      const pause = callback.apply(null, arguments);
      if (pause) {
        expected += delay;
        setTimeout(() => repeater(repetitions - 1), delay - dt);
      } else {
        expected += interval;
        setTimeout(() => repeater(repetitions - 1), interval - dt);
      }
    }
  }
  repeater(repetitions);
};

export default repeat;
