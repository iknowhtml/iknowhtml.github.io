import repeat from './repeat';

function type(id, interval, values, textDelay){
  var texts = [];
  values.constructor !== Array ? texts.push(values) : texts.push(...values);
  textDelay = textDelay || 0;

  texts.forEach((text, textsIndex) => {
  var delay = 0;

  for(let i = 0; i < textsIndex; i++){
    //calculating delay due to typing different sentences being asynchronous
    delay += interval * texts[i].length + textDelay;
  }
  var textIndex = 1;
  repeat(() => {
    if(textsIndex != 0 && textIndex == 1){
      document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + " ";

    }
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + text[textIndex - 1];
    textIndex++;
  } , 100, text.length, delay);
  });
}

export default type;
