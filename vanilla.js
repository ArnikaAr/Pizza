const pizzas = [
  { name: 'Karbonara', price: 10, kkal: 400, list: { cheese: 'dorBlue', meeeet: 'peperoni', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse' }, img: './img/pizza2.jpg' },
  { name: 'Margarita', price: 40, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse1', toping: 'chili' }, img: './img/pizza1.jpg' },
  { name: '4Cheese', price: 12, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse2' }, img: './img/pizza3.jpg' },
  { name: 'Tropicano', kkal: 390, price: 18, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse4' }, img: './img/pizza4.jpg' },
  { name: '4sizon', price: 26, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'tomatoSouse6' }, img: './img/pizza1.jpg' },
  { name: '4meats', price: 16, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'chilli' }, img: './img/pizza2.jpg' },
  { name: 'Peperoni', price: 5, kkal: 390, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'garlick' }, img: './img/pizza3.jpg' },
  { name: 'LaGalina', kkal: 400, price: 18, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'sweet' }, img: './img/pizza4.jpg' },
  { name: 'LaGalina with pineapple', price: 20, kkal: 500, list: { cheese: 'dor-blue', meet: 'peperoni', vegetables: 'sweet_garlick', souse: 'tomato' }, img: './img/pizza1.jpg' },
  { name: '4Mashrooms', price: 28, kkal: 400, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'sweet' }, img: './img/pizza2.jpg' },
  { name: 'Vegetarian', price: 54, kkal: 400, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'garlick' }, img: './img/pizza3.jpg' },
  { name: 'otherPizza', kkal: 500, price: 16, list: { cheese: 'dorBlue', meet: 'peperoni', vegetables: 'tomato', souse: 'another' }, img: './img/pizza4.jpg' }
];
const components = { dorBlue: 100, peperoni: 200, tomato: 50, tomatoSouse: 40, tomatoSouse1: 10, tomatoSouse2: 15, tomatoSouse4: 20, garlick: 10, sweet: 5, another: 16, chilli: 5, sweet_garlick: 15 };



$("select")

  .change(function () {

    if ($(this).val() == 'Table') {
      console.log('table');
      $('.table').css({ 'display': 'flex', 'flex-direction': 'row' });
      $('.card-img').css('display', 'flex');
      $('.card').css({ 'display': 'flex', 'flex-direction': 'column', 'width': '30%' });
      $('.card-list').css('display', 'block');
      $('button').css('display', 'block');
    }
    else {
      console.log('list');
      $('.table').css({ 'display': 'flex', 'flex-direction': 'column' });
      $('.card').css({ 'display': 'flex', 'width': '90%', 'flex-direction': 'row' });
      $('.card-img').css('display', 'none');
      $('.card-list').css('display', 'none');
      $('button').css('display', 'none');
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
  console.log(name);
  for (var key in pizzas) {
    if (pizzas[key].name == name) {
      console.log(pizzas[key].list);
      window.kkal = pizzas[key].kkal;
      var templist = Object.entries(pizzas[key].list).toString().split(',');
      var list = [];
      var list = templist.filter(function (v, i) {
        return i % 2 !== 0;
      });
      console.log(list);
      for (var key in list) {
        $(event.target).closest('div').append('</br> <input checked type="checkbox" class="radio" id="' + list[key] + '"> <label for="' + list[key] + '">' + list[key] + '</label> </br>  ');
      }
      $(event.target).closest('div').append('<div class="newKkal">Итого каллорий: ' + kkal + ' kkal </div> </br> <button id="list"> Order</buttons>');
    }
  }
});

$(document).on('change', '.radio', function (event) {
  var value = $(this).val();
  $('.radio[value=' + value + ']').prop('checked', this.checked);
  var newKkal = 0;
  if (this.checked) {
    var component = $(this).attr('id');
    for (var key in components) {
      if (component === key) {
        console.log(components[key]);
        console.log(newKkal);
        var newKkal = kkal + components[key] - components[key];
        $('.newKkal').html('<div class="newKkal">Итого каллорий: ' + newKkal + ' kkal </div>');
      }
    }
  }
  else {
    var component = $(this).attr('id');
    for (var key in components) {
      if (component === key) {
        console.log(components[key]);
        newKkal = kkal - components[key];
        console.log(newKkal);
        $('.newKkal').html('<div class="newKkal">Итого каллорий: ' + newKkal + ' kkal </div> ');
      }
    }
  }

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