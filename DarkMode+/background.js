chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetUrl = 'https://tgis.schoolbox.cloud/login/*';
  const redirectUrl = 'https://tgis.schoolbox.cloud/saml/index.php';
  if (changeInfo.status === 'complete' && tab.url.match(targetUrl)) {
    chrome.tabs.update(tabId, { url: redirectUrl });
  }
});