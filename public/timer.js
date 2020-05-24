chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ time: 60 }, function () {
    console.log('I am installed, 1 hour');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
