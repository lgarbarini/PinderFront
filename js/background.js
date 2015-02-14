var menu = document.getElementById( 'menu' );
var optionsContainer = document.getElementById( 'optionsContainer' );
var swipeyPageContainer = document.getElementById( 'swipeyPageContainer' );
var matchesContainer = document.getElementById( 'matchesContainer' );

/* remove card from top of deck, add one to back */
function showNextCard(){
    
}

/* match functions */
function matchNo(){
    console.log('nope');
}

function matchYes(){
    console.log("it's a match motherfucker");

}

/* Page Show/Hide Functions */
function showOptions(){
    console.log("show options");
    optionsContainer.classList.add('optionsOpen');
    page.addEventListener('mousedown', hideOptions);
}

function hideOptions(){
    console.log("hide options");
    optionsContainer.classList.remove('optionsOpen');
    page.removeEventListener('mousedown', hideOptions);   
}

function showMatches(){
    console.log("show matches");
    matchesContainer.classList.add('matchesOpen');
    swipeyPageContainer.classList.add('SPmatchesOpen');
    page.addEventListener('mousedown', hideMatches);
}

function hideMatches(){
    console.log("hide matches");
    matchesContainer.classList.remove('matchesOpen');
    swipeyPageContainer.classList.remove('SPmatchesOpen');
    page.removeEventListener('mousedown', hideMatches);   
}