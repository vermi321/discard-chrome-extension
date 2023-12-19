chrome.action.onClicked.addListener((tab) => {
    const {groupId} = tab;
    if (groupId === -1) {
        chrome.tabs.discard(tab.id);
    } else {
        chrome.tabs.query({groupId}, tabs => {
            tabs.forEach(tab => chrome.tabs.discard(tab.id))
        })
    }
});
