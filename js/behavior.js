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

    el.style.display = "flex";
    for (let i = 0; i < mainArticlesList.length; i++) {
        if (mainArticlesList[i] != currentMainId) {
            el = document.getElementById(mainArticlesList[i]);
            el.style.display = "none";
        }  
    }    
}