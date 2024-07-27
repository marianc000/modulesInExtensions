// state.js
import { on, off } from "../../content/onOffFunctions.js";

const ON = 'on', OFF = 'off';

const states = {
    [OFF]: { title: 'Stain backgrounds', badge: '', image: '/imgs/off.png', script: '/content/off.js', func: off },
    [ON]: { title: 'Remove background colors', badge: 'on', image: '/imgs/on.png', script: '/content/on.js', func: on }
};

export function setOff() {
    setState(states[OFF]);
}

async function getNextStateByTabTitle(tabId) {
    const tabTitle = await chrome.action.getTitle({ tabId });
    return Object.values(states).find(o => tabTitle !== o.title);
}

function setState(state, tabId) {
    const { title, image, script, badge, func } = state;

    if (tabId)
        // chrome.scripting.executeScript({
        //     target: { tabId },
        //     files: [script]
        // });
        chrome.scripting.executeScript({
            target: { tabId },
            func,
            args: [tabId]
        });

    chrome.action.setIcon({ tabId, path: image });
    chrome.action.setTitle({ tabId, title });
    chrome.action.setBadgeText({ tabId, text: badge });
}

export async function setNextState(tabId) {
    const nextState = await getNextStateByTabTitle(tabId);
    setState(nextState, tabId);
}