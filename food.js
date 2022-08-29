const loadMeal = (searchItem) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchItem}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFoodObject(data.meals));
};

const displayFoodObject = (foodObj) => {
  //   console.log(foodObj);
  const mainElemnt = document.getElementById("main");
  mainElemnt.innerHTML = ``;
  foodObj.forEach((food) => {
    console.log(food);

    const div = document.createElement("div");

    div.classList.add("col");

    div.innerHTML = `
    <div class="card" onClick="details('${food.strMeal}' ,'${food.strMealThumb}')" >
                                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${food.strMeal}</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
    `;

    mainElemnt.appendChild(div);
  });
};

const searchCategory = () => {
  const categorylist = document.getElementById("searchId");
  const categorySearched = categorylist.value;
  //   console.log(categorySearched);
  categorylist.value = "";

  loadMeal(categorySearched);
};
// ************************changed method ************
const details = (info) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}`)
    .then((respon) => respon.json())
    .then((data) => display2(data.meals[0]));
};

const display2 = (data) => {
  const infoMainElement = document.getElementById("infoId");
  infoMainElement.innerHTML = ``;
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${data.strMeal}</h5>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Know More Details</a>
                            </div>

      `;

  infoMainElement.appendChild(div);
};
