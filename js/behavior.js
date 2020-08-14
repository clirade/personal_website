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

function toggleMobileMenu() {
    // First turn the hamburger menu into a close button and vice versa
    document.getElementById("menuIcon").classList.toggle("change");
    // Use the content display status to figure out what is being asked
    // If content is hidden, then we're opening the menu, otherwise, we're closing it
    if (document.getElementById("mobileOverlayContent").style.display === "none" ) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

function openMobileMenu() {
    // Open the menu
    // Make the mobile menu take up the whole width of the screen
    document.getElementById("mobileOverlay").style.width = "100%";
    // Delay showing the content to avoid the weird way it unwraps otherwise
    setTimeout(() => {
        document.getElementById("mobileOverlayContent").style.display = "block";
    }, 250);
}

function closeMobileMenu() {
    // Close the menu
    // Move the mobile menu back out of view and hide the content
    document.getElementById("mobileOverlay").style.width = "0%";
    document.getElementById("mobileOverlayContent").style.display = "none";
}

window.onload = function(){
    // Make sure we always use the inner height.
    // Needed for cell phones
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;
    document.getElementById("bodyLayout").style.height = screenHeight + "px";
    document.getElementById("bodyLayout").style.width = screenWidth + "px";
  };
