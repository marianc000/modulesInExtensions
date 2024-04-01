console.log('>off.js');

import(chrome.runtime.getURL("content/modules/main.js"))
  .then(({ off }) => off()); 