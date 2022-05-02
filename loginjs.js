function checkSeller(){
    var y = document.getElementById("admin");
    y.checked = false;
  }

function checkAdmin(){
    var y = document.getElementById("user_or_seller");
    y.checked = false;
    console.log("admin");
}




/*functions for buyer dashboard  */
function showFav(){
    document.getElementById("buy_cards").style.display = "none";
    document.getElementById("favorite_cards").style.display = "flex";
    document.getElementById("listings").style.display = "none";
    document.getElementById("filters").style.display = "none";
}

function showForSale(){
  document.getElementById("buy_cards").style.display = "flex";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "none";
  document.getElementById("filters").style.display = "none";
}

function showListings(){
  document.getElementById("buy_cards").style.display = "none";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "flex";
  document.getElementById("filters").style.display = "none";
}

function showFilters(){
  document.getElementById("buy_cards").style.display = "none";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "none";
  document.getElementById("filters").style.display = "block";
}

var i = 0;

function loadBuyer(){
  console.log("hey");
  var card = document.createElement('div');
  card.classList.add('property_card');
  document.getElementById("listings").appendChild(card);

  makeCard();

}

var i = 0;

function makeCard() {
    var elem = document.getElementById('duplicate_this');
    var clone = elem.cloneNode(true);
    clone.style.display = "block";
    clone.id = "dup" + i++;
    elem.after(clone);
    console.log("hey there");
}

