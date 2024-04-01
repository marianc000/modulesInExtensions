console.log('>on.js', chrome.runtime.getURL("content/modules/main.js"));

import(chrome.runtime.getURL("content/modules/main.js"))
  .then(({ on }) => on()); 