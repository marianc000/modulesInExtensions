// on.js

console.log('>on1.js');

import(chrome.runtime.getURL("content/modules/main.js"))
  .then(({ on }) => on())
  .catch(er => console.error(er)); 
