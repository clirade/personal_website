var mainArticlesList = ["homeMain", "speakMain", "codeMain", "schoolMain", "workMain", "skillMain", "hobbyMain"];

function getMainfromSelectorId(selectorId) {
    String (selectorId);
    // Id is in format "category + 'Selector'"
    // So get a substring from index 0 to length - (number of letters in 'Selector' (8))
    let mainId;
    String (mainId);
    mainId = selectorId.substring(0, selectorId.length-8) + 'Main';

    return mainId;
}

function showArticle(currentSelectorId) {
    // display element of currentId
    var currentMainId = getMainfromSelectorId(currentSelectorId);
    var el = document.getElementById(currentMainId);
    el.style.display = "block";

    // hide everything else
    for (let i = 0; i < mainArticlesList.length; i++) {
        if (mainArticlesList[i] != currentMainId) {
            el = document.getElementById(mainArticlesList[i]);
            el.style.display = "none";
        }  
    }    
}

function adjustMainArticleSize(currentWinSize) {
    if (windowSize.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
}

var windowSize = window.matchMedia("(max-width: 768px)")
adjustMainArticleSize(windowSize) // Call listener function at run time
windowSize.addListener(adjustMainArticleSize) // Attach listener function on state changes
