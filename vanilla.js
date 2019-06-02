const pizzas = [
  { name: 'Karbonara', price: 15, kkal: 400, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse' }, img: './img/pizza2.jpg' },
  { name: 'Margarita', price: 23, kkal: 390, list: { cheese: 'parmezan', meet: 'ham', vegetables: 'tomato', souse: 'tomatoSouse1', toping: 'chili' }, img: './img/pizza1.jpg' },
  { name: '4Cheese', price: 16, kkal: 390, list: { cheese: 'Mozzarella', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse2' }, img: './img/pizza3.jpg' },
  { name: 'Tropicano', kkal: 35, price: 18, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse4' }, img: './img/pizza4.jpg' },
  { name: '4sizon', price: 25, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse6' }, img: './img/pizza1.jpg' },
  { name: '4meats', price: 15, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'chilli' }, img: './img/pizza2.jpg' },
  { name: 'Peperoni', price: 10, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'garlick' }, img: './img/pizza3.jpg' },
  { name: 'LaGalina', kkal: 40, price: 18, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'sweet' }, img: './img/pizza4.jpg' },
  { name: 'LaGalina with pineapple', price: 20, kkal: 500, list: { cheese: 'dor-blue', meet: 'peperoni', vegetables: 'sweet_garlick', souse: 'tomato' }, img: './img/pizza1.jpg' },
  { name: '4Mashrooms', price: 30, kkal: 400, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'sweet' }, img: './img/pizza2.jpg' },
  { name: 'Vegetarian', price: 50, kkal: 400, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'garlick' }, img: './img/pizza3.jpg' },
  { name: 'otherPizza', kkal: 500, price: 10, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'another' }, img: './img/pizza4.jpg' }
];
const components = { dorBlue: 100, ham: 100, peperoni: 200, tomato: 50, tomatoSouse: 40, tomatoSouse1: 10, tomatoSouse2: 15, tomatoSouse4: 20, garlick: 10, sweet: 5, another: 16, chilli: 5, sweet_garlick: 15 };
const cost = { dorBlue: 3, parmezan: 4, Mozzarella: 3, peperoni: 5, ham: 5, tomato: 2, tomatoSouse: 2, tomatoSouse1: 3, tomatoSouse2: 3, tomatoSouse4: 2, garlick: 1, sweet: 2, another: 4, chilli: 5, sweet_garlick: 5 };

class newCart {
  constructor(name, kal, price) {
    this.name = name;
    this.price = price;
    this.kkal = kal;
  }
}
var Cart = document.getElementById('Cart');
document.querySelector('#showCart').onclick = function () {
  Cart.showModal();
};
document.querySelector('#closeCart').onclick = function () {
  Cart.close();
};
var Constructor = document.getElementById('Constructor');
document.querySelector('#showConst').onclick = function () {
  Constructor.showModal();
}
document.querySelector('#closeConst').onclick = function () {
  Constructor.close();
}
var Final = document.getElementById('final');
document.querySelector('#showFinal').onclick = function () {
  Final.showModal();
}
document.querySelector('#closeFinal').onclick = function () {
  Final.close();
}

$(document).ready(function () {
  localStorage.setItem('email', 'oryna.likhota@nure.ua');
  var localMail = localStorage.getItem('email');

  if (localMail == 'oryna.likhota@nure.ua') {
    for (key in localStorage) {
      if (key.indexOf('pizza') != -1) {
        let ourPizza = JSON.parse(localStorage[key]);
        console.log(ourPizza);
        allPrice = allPrice + ourPizza.price;
        $('.cartItem').append(' <tr> <td> ' + ourPizza.name + ' - </td><td> ' + ourPizza.kkal + ' kkal -  </td><td> ' + ourPizza.price + ' $ </td><td> amount:<input class="amount" type="number"min="1" value="1"></td></tr>');
        $('.allPrice').html('Total price: ' + allPrice + ' $')

      }
    }

  }
  for (key in components) {
    $('.constructorSelect').append('<option value="' + key + '" id="constValue">' + key + '</option>');

  }
})

$("select")

  .change(function () {
    if ($(this).val() == 'None') {
      $('.app').css('display', 'none');
    }
    else if ($(this).val() == 'Table') {
      $('.app').css('display', 'block');
      $('.table').css({ 'display': 'flex', 'flex-direction': 'row' });
      $('.card-img').css('display', 'flex');
      $('.card').css({ 'display': 'flex', 'flex-direction': 'column', 'width': '30%' });
      $('.card-list').css('display', 'block');
      $('button').css('display', 'block');
    }
    else {
      $('.app').css('display', 'block');
      $('.table').css({ 'display': 'flex', 'flex-direction': 'column' });
      $('.card').css({ 'display': 'flex', 'width': '90%', 'flex-direction': 'row' });
      $('.card-img').css('display', 'none');
      $('.card-list').css('display', 'none');
      $('button#list').css('display', 'none');
    }
  })
  .change();


function createCardTable(pizza) {
  return `
    <div class="card">
    <i class="fas fa-pizza-slice"></i>
           <div class="card-img">
            <img class="img"
              src="${pizza.img}"
              alt="${pizza.name}">
        </div>
        <h3 class="name ${pizza.name}" >${pizza.name}</h3>
        <p>${pizza.price} $</p>
        <p class="kkal">${pizza.kkal} kkal</p>
        <button id="list" class="${pizza.name}">show Components</buttons>
    </div>
  `}

$(document).on('click', '#list', function (event) {
  var name = $(event.target).attr('class');
  for (var key in pizzas) {
    if (pizzas[key].name == name) {
      window.kkal = pizzas[key].kkal;
      window.price = pizzas[key].price;
      window.name = pizzas[key].name;
      var templist = Object.entries(pizzas[key].list).toString().split(',');
      var list = [];
      var list = templist.filter(function (v, i) {
        return i % 2 !== 0;
      });
      for (var key in list) {
        $(event.target).closest('div').append('</br> <div class="radioList"><input checked type="checkbox" class="radio" id="' + list[key] + '"> <label for="' + list[key] + '">' + list[key] + '</label> </div></br>  ');
      }
      $(event.target).closest('div').append('<div class="newKkal">Total calories: ' + kkal + ' kkal </div> </br> ');
      $(event.target).closest('div').append('<div class="newPrice">Total price: ' + price + ' $ </div> </br> <button id="list" class="order"> Order</buttons>');
    }
  }
  $(this).prop('disabled', true);
});

$(document).on('change', '.radio', function (event) {
  var value = $(this).val();
  $('.radio[value=' + value + ']').prop('checked', this.checked);
  var newKkal = 0;
  var newPrice = 0;
  if (this.checked) {
    var component = $(this).attr('id');
    for (var key in components) {
      if (component === key) {
        newKkal = kkal + components[key];
        kkal = newKkal;
        $('.newKkal').html('<div class="newKkal">Total calories: ' + newKkal + ' kkal </div> ');
      }
    }
    for (var key in cost) {
      if (component === key) {
        newPrice = price + cost[key];
        price = newPrice;
        $('.newPrice').html('<div class="newPrice">Total price: ' + newPrice + ' $ </div> ');

      }
    }
  }

  else {
    var component = $(this).attr('id');
    for (var key in components) {
      if (component === key) {
        newKkal = kkal - components[key];
        kkal = newKkal;
        $('.newKkal').html('<div class="newKkal">Total calories: ' + newKkal + ' kkal </div> ');
      }
    }
    for (var key in cost) {
      if (component === key) {
        newPrice = price - cost[key];
        price = newPrice;
        $('.newPrice').html('<div class="newPrice">Total price: ' + newPrice + ' $ </div> ');

      }
    }
  }

});




let allPrice = 0;
let cartArr = [];

$(document).on('click', '.order', function (event) {
  if (localStorage.getItem('email') == 'oryna.likhota@nure.ua') {
    cartObj = new newCart(name, kkal, price);
    localStorage.setItem('pizza' + name + '', JSON.stringify(cartObj));
    var ourPizza = JSON.parse(localStorage.getItem('pizza' + name + ''));
    allPrice = allPrice + ourPizza.price;
    $('.cartItem').append(' <tr> <td> ' + ourPizza.name + ' - </td><td> ' + ourPizza.kkal + ' kkal -  </td><td> ' + ourPizza.price + ' $ </td> <td> amount:<input  class="amount" type="number" min="1" value="1"></td></tr>');
    $('.allPrice').html('Total price: ' + allPrice + ' $')

  }
  else {
    localStorage.clear();
  }
  $(this).prop('disabled', true);
});
const templatesTable = pizzas.map(pizza => createCardTable(pizza));
const table = templatesTable.join(' ');
document.querySelector('.table').innerHTML = table;

$(".down").click(function () {

  var count = pizzas.length - 1;
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count - i; j++) {
      if (pizzas[j].price < pizzas[j + 1].price) {
        var max = pizzas[j];
        pizzas[j] = pizzas[j + 1];
        pizzas[j + 1] = max;
      }
    }
  }

  let newARR = pizzas.slice();

  const templatesTableSort = newARR.map(pizza => createCardTable(pizza));
  const table = templatesTableSort.join(' ');
  document.querySelector('.table').innerHTML = table;
})

$(".up").click(function () {

  var count = pizzas.length - 1;
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count - i; j++) {
      if (pizzas[j].price > pizzas[j + 1].price) {
        var max = pizzas[j];
        pizzas[j] = pizzas[j + 1];
        pizzas[j + 1] = max;
      }
    }
  }
  let newARR = pizzas.slice();

  const templatesTableSort = newARR.map(pizza => createCardTable(pizza));
  const table = templatesTableSort.join(' ');
  document.querySelector('.table').innerHTML = table;

})





