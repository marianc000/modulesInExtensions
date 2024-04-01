export const ON = 'on', OFF = 'off';

const states = {
    [OFF]: { title: 'Stain backgrounds', badge: '', image: '/imgs/off.png', script: '/content/off.js' },
    [ON]: { title: 'Remove background colors', badge: 'on', image: '/imgs/on.png', script: '/content/on.js' }
};

export function setOff() {
    setState(OFF);
}

export function getStateByTitle(titleInTab) {
    return Object.entries(states).find(([, { title }]) => titleInTab === title)[0];
}

export function setState(state, tabId) {
    const { title, image, script,badge } = states[state];

    if (tabId)
        chrome.scripting.executeScript({
            target: { tabId },
            files: [script]
        });

    chrome.action.setIcon({ tabId, path: image });
    chrome.action.setTitle({ tabId, title });
    chrome.action.setBadgeText({ tabId, text: badge});
}
