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
    document.getElementById("favorite_cards").style.display = "block";
}

function showForSale(){

  document.getElementById("buy_cards").style.display = "block";
  document.getElementById("favorite_cards").style.display = "none";
}