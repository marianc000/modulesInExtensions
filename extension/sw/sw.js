// sw.js
import { setOff, setNextState } from './state/states.js';

chrome.runtime.onInstalled.addListener(() => {
  setOff();
});

chrome.action.onClicked.addListener(({ id }) => {
  setNextState(id);
});
