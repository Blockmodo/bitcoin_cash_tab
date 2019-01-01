chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: "https://blockmodo.com/home/BCH"
    }, function(tab) {
       
    });    
});
