try{
  console.log('start')
  chrome.action.onClicked.addListener(function (tab) {
      chrome.scripting.executeScript({
        files: ['content.js'],
        target: {tabId: tab.id}
      });
  });
}catch(e){
  console.log(e);
}
