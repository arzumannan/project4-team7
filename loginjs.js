function checkSeller(){
    var y = document.getElementById("admin");
    y.checked = false;
  }

function checkAdmin(){
    var y = document.getElementById("user_or_seller");
    y.checked = false;
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

function loadBuyer(){
  console.log("hey");
  var card = document.createElement('div');
  card.classList.add('property_card');
  document.getElementById("listings").appendChild(card);

}

function makeCard(){
  var card = document.createElement('div');
  card.classList.add('');
}

