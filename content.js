chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const selectors = [
        "nav",
        ".other-project"
      ];

      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });

      console.log("[HTML Remover] removed:", selectors);
    }
  });
});
