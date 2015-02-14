var menu = document.getElementById( 'menu' );
var optionsContainer = document.getElementById( 'optionsContainer' );
var swipeyPageContainer = document.getElementById( 'swipeyPageContainer' );
var cardsContainer = document.getElementById('cardsContainer');
var matchesContainer = document.getElementById( 'matchesContainer' );
var optionsPages = document.getElementById('optionsPages');

/* onload run addCard 3 times to populate deck of cards */


/* remove card from top of deck, add one to back */
function showNextCard(){
    //remove top card
    cardsContainer.removeChild(cardsContainer.firstElementChild);
    
    //add new card 
    addCard( 'data' );
}

//takes JSON object (results[i] from backend)
function addCard(d){
    var newCard = document.createElement("div");
    newCard.classList.add('card');
    
    //conver to for loop once we know what to make;
    //these are strings since I'm too lazy to make d a real JSON object
    makeChild("d.title", '', 'h1', newCard);
    makeChild("d.country", 'toggle', 'p', newCard);
    makeChild("d.project_description", 'toggle hidden', 'p', newCard);
    
    cardsContainer.appendChild(newCard);
    cardsContainer.lastElementChild.addEventListener('mousedown', startTime, false);
    cardsContainer.lastElementChild.addEventListener('mouseup', cardClick, false);
}

//makes child node (not gonna make prototype because lazy)
//content is string of content, tag is string of tag type
function makeChild(content,cls,tag,parent){
    var el = document.createElement( tag );
    el.className =  cls ;
    el.innerText = content; //maybe use innerHTML for more control
    parent.appendChild( el );
}

var time = new Date();
function startTime(){
    time = new Date();
}
/* shows extended data */
function cardClick(e){
    if( new Date() - time < 250){
        var em = this.getElementsByClassName( 'toggle' );
        for(i=0;i<em.length;i++){
            em[i].classList.contains('hidden') ? em[i].classList.remove( 'hidden' ) : em[i].classList.add( 'hidden' );
        } 
    }
    
}

/* match functions */
function matchNo(){
    console.log('nope');
}

function matchYes(){
    console.log("it's a match motherfucker");

}

/* Page Show/Hide Functions */
for(var i=0; i<optionsContainer.children.length;i++){
    console.log(optionsContainer.children[i])
    optionsContainer.children[i].addEventListener('click', showOptionsPage);
}

function showOptionsPage(){
    console.log("show options page:" + this.id+'Page');
    var page = document.getElementById(this.id+'Page');
    page.classList.add('showOptionsPage');
    page.addEventListener('click', hideOptionsPage);
}

function hideOptionsPage(){
    console.log("hide options page");
    this.classList.remove('showOptionsPage');
    page.removeEventListener('mousedown', hideMatches);   
}

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