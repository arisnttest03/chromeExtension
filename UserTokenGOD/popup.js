chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentUrl = tabs[0].url;
  const missingUserToken = "Please navigate to correct page for USER TOKEN.";
  if (currentUrl.match("UserToken")) {
    const userTokenString = currentUrl.split("UserToken");
    const userTokenSplit1 = userTokenString[1].split("=");
    const userToken = userTokenSplit1[1].split("&");
    const decodedUserToken = decodeURIComponent(userToken[0]);

    document.getElementById("userToken").textContent = decodedUserToken;
  } else {
    document.getElementById("userToken").textContent = missingUserToken;
  }
});
