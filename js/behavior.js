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
    var mobile = false;

    // Figure out where we're being called from 
    String (currentSelectorId);
    if (currentSelectorId.substring(0, 6) == "mobile") {
        mobile = true;
        currentSelectorId = currentSelectorId.substring(6, currentSelectorId.length);
    }

    // Display element of currentId
    var currentMainId = getMainfromSelectorId(currentSelectorId);
    var el = document.getElementById(currentMainId);
    el.style.display = "block";

    // Hide everything else
    for (let i = 0; i < mainArticlesList.length; i++) {
        if (mainArticlesList[i] != currentMainId) {
            el = document.getElementById(mainArticlesList[i]);
            el.style.display = "none";
        }  
    } 
    
    // Close mobile menu
    setTimeout(function() {
        if (mobile) {
            closeMobileMenu();
        }
    }, 500);

}

function openMobileMenu() {
    // Make the mobile menu take up all the screen
    document.getElementById("mobileOverlay").style.width = "100%";
}

function closeMobileMenu() {
    // Move the mobile menu back out of view
    document.getElementById("mobileOverlay").style.width = "0%";
}