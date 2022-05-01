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
    document.getElementById("sell").style.display = "none";
}

function showForSale(){

  document.getElementById("buy_cards").style.display = "flex";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "none";
  document.getElementById("sell").style.display = "none";
}

function sellProp(){
  document.getElementById("buy_cards").style.display = "none";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "none";
  document.getElementById("sell").style.display = "flex";
}

function showListings(){
  document.getElementById("buy_cards").style.display = "none";
  document.getElementById("favorite_cards").style.display = "none";
  document.getElementById("listings").style.display = "flex";
  document.getElementById("sell").style.display = "none";
}


