import {ON,OFF,getStateByTitle,setState} from './state/states.js';
 
chrome.runtime.onInstalled.addListener(() => {
  setState(OFF);
});
 
chrome.action.onClicked.addListener(async ({ id: tabId}) => {

  const currentState = getStateByTitle(await chrome.action.getTitle({ tabId }));
  setState(currentState===ON ? OFF : ON, tabId);
});
