var cardData = [
  {
    dish: "KABAB",
    category: "FOOD",
    delivery: "paid",
    price: "$34",
    img: "./Assets/kabab.jpg",
  },
  {
    dish: "BIRYANI",
    category: "FOOD",
    delivery: "paid",
    price: "$23",
    img: "./Assets/bir2.jpg",
  },
  {
    dish: "MATKA BIRYANI",
    category: "FOOD",
    delivery: "paid",
    price: "$67",
    img: "./Assets/matkaBiryani.jpg",
  },
  {
    dish: "CHARGHA",
    category: "FOOD",
    delivery: "paid",
    price: "$90",
    img: "./Assets/chargha.jpg",
  },
  {
    dish: "CHARGHA",
    category: "FOOD",
    delivery: "paid",
    price: "$90",
    img: "./Assets/chargha.jpg",
  },
  {
    dish: "CHARGHA",
    category: "FOOD",
    delivery: "paid",
    price: "$90",
    img: "./Assets/chargha.jpg",
  },
];
var amount = 0;

var arr = new Array(cardData.length);
var modal = document.getElementById("modalAmount");
var am = document.getElementById("totalAmount");
var q = -1;
const remove = (index) => {
  var x = localStorage.key(index);

  localStorage.removeItem(x);

  console.log(x);
};
var confirmOrderId = document.getElementById("pendingCard");

const confirmOrder = (dish, category, delivery, price, img) => {
  console.log(dish, category, delivery, price, img);

  confirmOrderId.innerHTML = ` <div class="col">
      <div class="card"  style="width: 18rem;">
          <img src=${img} class="card-img-top" alt="...">
          <div class="card-body card-body-custom">
            <h5 class="card-title">DISH: ${dish}</h5>
            <p class="card-text">CTEGORY: ${category}</p>
            <p class="card-text">DELIVERY: ${delivery}</p>
            <p class="card-text">PRICE: ${price}</p>
            
          </div>
        </div>
    </div>`;
};
var displayAmount =  document.getElementById("showAmount");
const Order = (dish, category, delivery, price, img) => {
  console.log(dish, category, delivery, price, img);

  var getItems = new Array();
  console.log(a);
  alert("your odder has been placed");
  amount += Number(price.slice(1));
  localStorage.setItem("amount", amount);
  
      displayAmount.innerHTML=`Total amount: $${localStorage.getItem("amount")}`


  
  console.log("amount", amount);

  var obj = {
    category: category,
    dish: dish,

    delivery: delivery,
    price: price,
    img: img,
  };
  getItems.push(JSON.stringify(obj));

  q = q + 1;
  for (var k = 0; k <= localStorage.length - 1; k++) {
    var data = JSON.parse(localStorage.getItem(`arr[${k}]`));
    console.log(data);
    if (data) {
      if (data.dish[k] === dish) {
        console.log("already exist");
        var bar = false;
      }
    }
  }
  if (bar !== false) {
    localStorage.setItem(`arr[${q}]`, getItems);
  }

};
var el = document.createElement("div");
var modal = document.getElementById("modalAmount");
var TA = document.getElementById("totalAmount");

const cart = () => {
  var check = localStorage.getItem("amount");
  console.log("a.m", localStorage.length);

  for (var k = 0; k <= localStorage.length - 1; k++) {
    var data = JSON.parse(localStorage.getItem(`arr[${k}]`));
    console.log("data", data);
    data
      ? (modal.innerHTML += ` <div class="col">
      <div class="card"  style="width: 18rem;">
          <img src=${data.img} class="card-img-top" alt="...">
          <div class="card-body card-body-custom">
            <h5 class="card-title">DISH: ${data.dish}</h5>
            <p class="card-text">CTEGORY: ${data.category}</p>
            <p class="card-text">DELIVERY: ${data.delivery}</p>
            <p class="card-text">PRICE: ${data.price}</p>
            <button class="btn"  id="OrderNow" type="submit" onclick=remove('${k}')>
              remove 
            </button>
            <button class="btn"  id="OrderNow" type="submit" onclick=confirmOrder('${data.dish}','${data.category}','${data.delivery}','${data.price}','${data.img}')>
              order 
            </button>

          </div>
        </div>
    </div>`)
      : "";
  }
};

var a = document.getElementById("dynamic-card");
for (var i = 0; i <= cardData.length - 1; i++) {
  a.innerHTML += ` <div class="col">
     <div class="card"  style="width: 18rem;">
         <img src=${cardData[i].img} class="card-img-top" alt="...">
         <div class="card-body card-body-custom">
           <h5 class="card-title">DISH: ${cardData[i].dish}</h5>
           <p class="card-text">CTEGORY: ${cardData[i].category}</p>
           <p class="card-text">DELIVERY: ${cardData[i].delivery}</p>
           <p class="card-text">PRICE: ${cardData[i].price}</p>
 <button class="btn btn-sm orderNowbtn" onclick="Order('${cardData[i].dish}','${cardData[i].category}','${cardData[i].delivery}','${cardData[i].price}','${cardData[i].img}')">Order Now</button> 
          
           
          

         </div>
       </div>
   </div>`;
}
