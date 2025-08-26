chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
const loginUrl = 'https://tgis.schoolbox.cloud/login/*';
const redirectUrl = 'https://tgis.schoolbox.cloud/saml/index.php';
if (changeInfo.status === 'complete' && tab.url.match(loginUrl)) {
chrome.tabs.update(tabId, { url: redirectUrl });
}
});