function addDOMListener(target, callback, config) {
  var element = document.getElementById(target);
  var observer = new WebKitMutationObserver(callback());

  config = config || {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };

  observer.observe(element, config);

  return observer;
}

function removeDomListener(observer) {
  observer.disconnect();
}

export { addDOMListener, removeDomListener, };
