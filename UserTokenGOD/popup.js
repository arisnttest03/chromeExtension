chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentUrl = tabs[0].url;
  const missingUserToken = "Please navigate to correct page for USER TOKEN.";
  if (currentUrl.match("UserToken")) {
    const userTokenString = currentUrl.split("UserToken");
    const userTokenSplit1 = userTokenString[1].split("=");
    const userToken = userTokenSplit1[1].split("&");
    const decodedUserToken = decodeURIComponent(userToken[0]);

    document.getElementById("userToken").textContent = decodedUserToken;
    const copyButton = document.getElementById("btnCopy");
    copyButton.addEventListener("click", function() {
      const textToCopy = decodedUserToken;
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      copyButton.textContent = "Copied!";
      setTimeout(function() {
        copyButton.textContent = "Click to copy token";
      }, 2000);
    });
  } else {
    document.getElementById("userToken").textContent = missingUserToken;
  }


});
