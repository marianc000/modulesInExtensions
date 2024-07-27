
console.log('>on.js');

import(chrome.runtime.getURL("content/modules/main.js"))
  .then(({ on, off }) => {
    self.off = off;
    on();
  }); 