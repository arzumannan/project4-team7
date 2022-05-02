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
  displayFilters();
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

function displayFilters(){
    var minRent = document.getElementById("rentPrice").value;
    var numBed = document.getElementById("bedrooms").value;
    var numBath = document.getElementById("bathrooms").value;
    var sqrft = document.getElementById("sqrfootage").value;
    var subLength = document.getElementById("length").value;
    var pets = document.getElementById("pets").value;
    var city = document.getElementById("city").value;
    var parking = document.getElementById("parking").value;
    var age = document.getElementById("age").value;
    
    for(var j = 1; j < 7; j++){
      var boolval = true;
      var house = document.getElementById("house" + j);
      var room = document.getElementById("rooms" + j).textContent;
      var bath = document.getElementById("bath" + j).textContent;
      var rent = document.getElementById("rent" + j).textContent;
      var size = document.getElementById("size" + j).textContent;
      var length = document.getElementById("length" + j).textContent;
      var pet = document.getElementById("pets" + j).textContent;
      var park = document.getElementById("parking" + j).textContent;
      var date = document.getElementById("age" + j).textContent;
      
      
      if(!(room >= numBed)){
        boolval = false;
      }else if(!(bath >= numBath)){
        boolval = false;
      }else if((rent <= minRent)){
        boolval = false;
      }else if(!(pet === pets) && !(pets === "placeholderPets")){
        boolval = false;
      }else if(!(park === parking) && !(parking === "placeholderPark")){
        boolval = false;
      }else if(!(date === age) && !(age === "placeholderAge")){
        boolval = false;
      }

      if(!boolval){
        house.style.display = "none";
      }else{
        house.style.display = "block";
      }
      
      
    }
}

