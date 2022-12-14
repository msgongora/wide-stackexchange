function setDisabledClass(obj) {
  if (obj.enableWideStackExch)
  {
    document.body.classList.remove('stackexchange-disabled');
  }
  else
  {
    document.body.classList.add('stackexchange-disabled');
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  setDisabledClass(request);
});

chrome.runtime.sendMessage({reload: true}, setDisabledClass);
