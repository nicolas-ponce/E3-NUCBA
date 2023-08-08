const inputNumber = document.querySelector(".search__bar-input");
const button = document.querySelector(".search__bar-btn");
const pizzaCard = document.querySelector(".pizza-card");
const error = document.querySelector(".error");

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];







// Función para traer la pizza guardada

const getSavedPizza = () => {
  const savedPizza = JSON.parse(localStorage.getItem('savedPizza'));
  
  if(savedPizza) {
    pizzaCard.innerHTML = `
    <h2 class="pizza-card__nombre">${savedPizza.nombre}</h2>
    <img class="pizza-card__img" src="${savedPizza.imagen}">
    <p class="pizza-card__precio">${savedPizza.precio}</p>
    `;
  }
}
getSavedPizza();

// Función validar existencia de la pizza según ID

const searchPizza = () => {
  const pizza = pizzas.find((pizza) => pizza.id == inputNumber.value)

  if(inputNumber.value == "") {
    pizzaCard.innerHTML = "";
    error.textContent = "Por favor ingrese un número";
    return;
  }

  if(!pizza) {
    pizzaCard.innerHTML = "";
    error.textContent = "No existe la pizza solicitada";
    return;
  }

  if(pizza) {
    pizzaCard.innerHTML = `
    <h2 class="pizza-card__nombre">${pizza.nombre}</h2>
    <img class="pizza-card__img" src="${pizza.imagen}">
    <p class="pizza-card__precio">${pizza.precio}</p>
    `;
    localStorage.setItem("savedPizza", JSON.stringify(pizza));
  }
}

button.addEventListener("click", searchPizza);




