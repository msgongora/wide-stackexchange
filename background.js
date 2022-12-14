var toggle = true;

chrome.action.onClicked.addListener(function(tab){
  toggle = !toggle;
  chrome.action.setIcon({path: (toggle ? "icons/icon.png" : "icons/icon-disabled.png")});
  chrome.tabs.sendMessage(tab.id, {enableWideStackExch: toggle});
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.reload)
  {
    callback({enableWideStackExch: toggle});
  }
});
