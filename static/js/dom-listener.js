function addDOMListener(target, callback, config) {
  const element = document.getElementById(target);
  const observer = new WebKitMutationObserver(callback());

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
