// onOffFunctions.js

export function on(tabId) {
  console.log('>on tabId=', tabId);
  import(chrome.runtime.getURL("content/modules/main.js"))
    .then(({ on }) => on())
    .catch(er => console.error(er));
}

export function off(tabId) {
  console.log('>off tabId=', tabId);
  import(chrome.runtime.getURL("content/modules/main.js"))
    .then(({ off }) => off());
}