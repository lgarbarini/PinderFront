var menu = document.getElementById( 'menu' );
var optionsContainer = document.getElementById( 'optionsContainer' );
var swipeyPageContainer = document.getElementById( 'swipeyPageContainer' );
var cardsContainer = document.getElementById('cardsContainer');
var matchesContainer = document.getElementById( 'matchesContainer' );

/* remove card from top of deck, add one to back */
function showNextCard(){
    //remove top card
    cardsContainer.removeChild(cardsContainer.firstElementChild);
    
    //add new card 
    //addCard( data );
}

//takes JSON object (results[i] from backend)
function addCard(d){
    var newCard = document.createElement("div");
    newCard.classList.add('card');
    
    //example use (should for loop through info from d )
    makeChild('fdsafdas','p',newCard);
    
    cardsContainer.appendChild(newCard);
}

//makes child node (not gonna make prototype because lazy)
//content is string of content, tag is string of tag type
function makeChild(content,tag,parent){
    var el = document.createElement( tag );
    el.innerText = content; //maybe use innerHTML for more control
    parent.appendChild( el );
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