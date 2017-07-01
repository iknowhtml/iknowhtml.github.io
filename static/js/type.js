import repeat from './repeat';

function type(id, interval, text, textDelay) {
  textDelay = textDelay || 0;
  let textIndex = 0;
  repeat(
    () => {
      document.getElementById(id).innerHTML =
        document.getElementById(id).innerHTML + text[textIndex];
      textIndex++;
      if (text[textIndex - 1] + text[textIndex] == '. ') {
        return true;
      }
      return false;
    },
    interval,
    text.length,
    textDelay
  );
}

export default type;
