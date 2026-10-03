var rating = document.getElementById("rating");
var reviewCount = document.getElementById("review-count");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var servings = document.getElementById("servings");
var difficulty = document.getElementById("difficulty");
var cuisine = document.getElementById("cuisine");
var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");
var ingredientsList = document.getElementById("ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var calories = document.getElementById("calories");
var protein = document.getElementById("Protein");
var carbohydrates = document.getElementById("Carbohydrates");
var fat = document.getElementById("Fat");
var fiber = document.getElementById("Fiber");
var sodium = document.getElementById("Sodium");
var chefTip = document.getElementById("chef-tip");
var recipeImage = document.getElementById("recipe-image");
var timeAlert = document.getElementById("time-alert");

var recipes = [
  {
    name: "Chicken Biryani",
    difficulty: "Medium",
    cuisine: "Indian",
    info: "Fragrant layered rice with spiced, yogurt-marinated chicken",
    image: "./assets/biryani.jpg",
    rating: 4.8,
    reviews: 412,
    preparationTime: "30 min",
    cookingTime: 45,
    servingSize: 4,
    ingredients: [
      "500g chicken thighs, cut into pieces",
      "2 cups basmati rice, rinsed and soaked",
      "1 cup plain yogurt",
      "2 large onions, thinly sliced",
      "2 tomatoes, chopped",
      "4 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "2 tablespoons biryani masala",
      "3 tablespoons ghee or vegetable oil",
      "1 handful fresh mint and coriander leaves",
      "Salt to taste",
    ],
    instructions: [
      "Mix the chicken with yogurt, garlic, ginger, biryani masala and salt. Marinate for at least 30 minutes.",
      "Boil the soaked rice in salted water for 5-6 minutes until 70% cooked, then drain.",
      "Heat ghee in a heavy pot and fry the onions until deep golden. Remove half for garnish.",
      "Add the tomatoes to the pot and cook for 3 minutes, then add the marinated chicken and cook for 10 minutes.",
      "Spread the rice over the chicken, top with fried onions, mint and coriander.",
      "Cover tightly and cook on very low heat for 20 minutes. Gently mix before serving with raita.",
    ],
    nutritionFacts: {
      calories: 520,
      protein: 32,
      carbohydrates: 62,
      fat: 16,
      fiber: 4,
      sodium: 780,
    },
    chefTips: [
      "Soak the basmati rice for 30 minutes so the grains cook long and fluffy",
      "Marinate the chicken overnight for deeper flavor and more tender meat",
      "Seal the pot lid with foil or dough to trap the steam while it cooks",
      "Serve with cucumber raita to balance the spices",
    ],
  },
  {
    name: "Honey Garlic Salmon",
    difficulty: "Easy",
    cuisine: "Asian",
    info: "Pan-seared salmon with a sweet and savory glaze",
    image: "./assets/salmon.jpg",
    rating: 4.9,
    reviews: 538,
    preparationTime: "10 min",
    cookingTime: 15,
    servingSize: 2,
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutritionFacts: {
      calories: 420,
      protein: 35,
      carbohydrates: 28,
      fat: 18,
      fiber: 1,
      sodium: 690,
    },
    chefTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Teriyaki Chicken Bowl",
    difficulty: "Easy",
    cuisine: "Japanese",
    info: "Sweet and savory chicken over rice with vegetables",
    image: "./assets/teriyaki.jpg",
    rating: 4.7,
    reviews: 367,
    preparationTime: "15 min",
    cookingTime: 20,
    servingSize: 2,
    ingredients: [
      "2 chicken breasts, cut into cubes",
      "1 cup jasmine rice",
      "4 tablespoons soy sauce",
      "2 tablespoons mirin",
      "2 tablespoons brown sugar",
      "1 teaspoon cornstarch mixed with 2 tablespoons water",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "1 tablespoon vegetable oil",
      "Sesame seeds for garnish",
    ],
    instructions: [
      "Cook the rice according to the package instructions and keep warm.",
      "Whisk together soy sauce, mirin, brown sugar and the cornstarch mixture to make the teriyaki sauce.",
      "Heat oil in a pan over medium-high heat and cook the chicken for 6-7 minutes until golden.",
      "Add broccoli and carrot to the pan and stir-fry for 3 minutes.",
      "Pour in the teriyaki sauce and simmer for 2 minutes until thick and glossy.",
      "Spoon the chicken and vegetables over the rice and sprinkle with sesame seeds.",
    ],
    nutritionFacts: {
      calories: 480,
      protein: 38,
      carbohydrates: 55,
      fat: 10,
      fiber: 3,
      sodium: 920,
    },
    chefTips: [
      "Use chicken thighs instead of breasts for juicier meat",
      "Don't crowd the pan - cook the chicken in batches so it browns",
      "Add the sauce at the end so the sugar doesn't burn",
      "Leftover rice works great and soaks up the sauce better",
    ],
  },
  {
    name: "Spaghetti Carbonara",
    difficulty: "Medium",
    cuisine: "Italian",
    info: "Silky Roman pasta with egg, cheese and crispy pancetta",
    image: "./assets/carbonara.jpg",
    rating: 4.8,
    reviews: 621,
    preparationTime: "10 min",
    cookingTime: 15,
    servingSize: 2,
    ingredients: [
      "200g spaghetti",
      "100g pancetta or guanciale, diced",
      "2 large eggs",
      "1 egg yolk",
      "50g Pecorino Romano, finely grated",
      "1 teaspoon black pepper, freshly ground",
      "Salt for the pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook the spaghetti until al dente.",
      "While the pasta cooks, fry the pancetta in a dry pan over medium heat until crispy.",
      "In a bowl, whisk the eggs, egg yolk, grated cheese and black pepper.",
      "Reserve 1 cup of pasta water, then drain the spaghetti.",
      "Take the pan off the heat, add the spaghetti to the pancetta and toss to coat in the fat.",
      "Pour in the egg mixture and toss quickly, adding splashes of pasta water until creamy. Serve immediately.",
    ],
    nutritionFacts: {
      calories: 610,
      protein: 28,
      carbohydrates: 70,
      fat: 24,
      fiber: 3,
      sodium: 850,
    },
    chefTips: [
      "Always mix the eggs off the heat so they don't scramble",
      "Pasta water is the secret to a silky sauce - never skip it",
      "Real carbonara has no cream - the eggs make it creamy",
      "Grate the cheese finely so it melts smoothly into the sauce",
    ],
  },
  {
    name: "Beef Tacos",
    difficulty: "Easy",
    cuisine: "Mexican",
    info: "Crispy shells packed with spiced beef and fresh toppings",
    image: "./assets/tacos.jpg",
    rating: 4.6,
    reviews: 298,
    preparationTime: "15 min",
    cookingTime: 15,
    servingSize: 4,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "2 tablespoons taco seasoning",
      "1/2 cup water",
      "1 cup lettuce, shredded",
      "2 tomatoes, diced",
      "1 cup cheddar cheese, shredded",
      "1/2 cup sour cream",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat and brown the ground beef, breaking it apart.",
      "Add the onion and garlic and cook for 3 minutes until soft.",
      "Stir in the taco seasoning and water, then simmer for 5 minutes until thickened.",
      "Warm the taco shells in the oven at 180°C for 3-4 minutes.",
      "Fill each shell with the beef mixture.",
      "Top with lettuce, tomatoes, cheese and a spoon of sour cream. Serve right away.",
    ],
    nutritionFacts: {
      calories: 450,
      protein: 26,
      carbohydrates: 24,
      fat: 28,
      fiber: 3,
      sodium: 760,
    },
    chefTips: [
      "Drain extra fat from the beef before adding the seasoning",
      "Warm the shells so they are crispy and don't crack",
      "Squeeze fresh lime juice over the tacos just before serving",
      "Add sliced jalapeños if you like it spicy",
    ],
  },
  {
    name: "Greek Salad",
    difficulty: "Easy",
    cuisine: "Greek",
    info: "Fresh Mediterranean salad with feta, olives and crisp vegetables",
    image: "./assets/greek-salad.jpg",
    rating: 4.5,
    reviews: 184,
    preparationTime: "15 min",
    cookingTime: 0,
    servingSize: 2,
    ingredients: [
      "3 ripe tomatoes, cut into wedges",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1 green bell pepper, sliced",
      "100g feta cheese, cut into a block",
      "1/2 cup Kalamata olives",
      "3 tablespoons extra virgin olive oil",
      "1 tablespoon red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Wash and dry all the vegetables.",
      "Cut the tomatoes into wedges and slice the cucumber, onion and bell pepper.",
      "Arrange the vegetables in a large bowl and add the olives.",
      "Place the block of feta on top of the salad.",
      "Whisk the olive oil, vinegar, oregano, salt and pepper together.",
      "Drizzle the dressing over the salad and serve immediately.",
    ],
    nutritionFacts: {
      calories: 310,
      protein: 9,
      carbohydrates: 14,
      fat: 25,
      fiber: 4,
      sodium: 820,
    },
    chefTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Soak the sliced onion in cold water for 10 minutes to soften its bite",
      "Keep the feta in one block - it's the traditional way to serve it",
      "Serve with warm pita bread to soak up the dressing",
    ],
  },
  {
    name: "Pad Thai",
    difficulty: "Medium",
    cuisine: "Thai",
    info: "Stir-fried rice noodles with shrimp, peanuts and tangy tamarind sauce",
    image: "./assets/pad-thai.jpg",
    rating: 4.7,
    reviews: 456,
    preparationTime: "20 min",
    cookingTime: 15,
    servingSize: 2,
    ingredients: [
      "200g flat rice noodles",
      "200g large shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "2 tablespoons brown sugar",
      "2 cloves garlic, minced",
      "1 cup bean sprouts",
      "3 green onions, cut into pieces",
      "1/4 cup roasted peanuts, chopped",
      "2 tablespoons vegetable oil",
      "1 lime, cut into wedges",
    ],
    instructions: [
      "Soak the rice noodles in warm water for 20 minutes until soft, then drain.",
      "Mix the tamarind paste, fish sauce and brown sugar to make the sauce.",
      "Heat oil in a wok over high heat, add garlic and shrimp, and cook for 2 minutes until pink.",
      "Push everything to the side, crack in the eggs and scramble them.",
      "Add the noodles and sauce and toss for 2-3 minutes until the noodles absorb the sauce.",
      "Stir in bean sprouts and green onions, then top with peanuts and serve with lime wedges.",
    ],
    nutritionFacts: {
      calories: 540,
      protein: 27,
      carbohydrates: 72,
      fat: 16,
      fiber: 3,
      sodium: 1100,
    },
    chefTips: [
      "Don't over-soak the noodles - they finish cooking in the wok",
      "Keep the heat high so the noodles fry instead of steam",
      "Have all ingredients ready before you start - it cooks very fast",
      "Balance the sauce to your taste: more sugar for sweet, more tamarind for sour",
    ],
  },
  {
    name: "Margherita Pizza",
    difficulty: "Medium",
    cuisine: "Italian",
    info: "Classic thin-crust pizza with tomato, mozzarella and fresh basil",
    image: "./assets/pizza.jpg",
    rating: 4.8,
    reviews: 703,
    preparationTime: "1 hour 30 min",
    cookingTime: 10,
    servingSize: 2,
    ingredients: [
      "250g bread flour",
      "160ml warm water",
      "1 teaspoon instant yeast",
      "1 teaspoon salt",
      "1 tablespoon olive oil",
      "1/2 cup crushed tomatoes",
      "150g fresh mozzarella, torn",
      "1 handful fresh basil leaves",
    ],
    instructions: [
      "Mix flour, yeast and salt, then add warm water and olive oil and knead for 10 minutes until smooth.",
      "Cover the dough and let it rise in a warm place for 1 hour until doubled.",
      "Preheat the oven to its highest setting (250°C or more) with a tray or pizza stone inside.",
      "Stretch the dough into a thin round and place it on baking paper.",
      "Spread the crushed tomatoes over the base and add the mozzarella.",
      "Bake for 8-10 minutes until the crust is golden and bubbly. Top with fresh basil before serving.",
    ],
    nutritionFacts: {
      calories: 580,
      protein: 24,
      carbohydrates: 78,
      fat: 18,
      fiber: 4,
      sodium: 940,
    },
    chefTips: [
      "Preheat the tray or stone for at least 30 minutes for a crispy base",
      "Stretch the dough by hand - a rolling pin pushes out the air bubbles",
      "Pat the mozzarella dry so the pizza doesn't get soggy",
      "Add the basil after baking so it stays fresh and green",
    ],
  },
  {
    name: "Butter Chicken",
    difficulty: "Medium",
    cuisine: "Indian",
    info: "Tender chicken in a rich, creamy tomato and butter sauce",
    image: "./assets/butter-chicken.jpg",
    rating: 4.9,
    reviews: 589,
    preparationTime: "20 min",
    cookingTime: 30,
    servingSize: 4,
    ingredients: [
      "600g chicken thighs, cut into pieces",
      "1/2 cup plain yogurt",
      "2 teaspoons garam masala",
      "1 teaspoon chili powder",
      "3 tablespoons butter",
      "1 onion, finely chopped",
      "4 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "1 cup tomato puree",
      "1/2 cup heavy cream",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Marinate the chicken with yogurt, 1 teaspoon garam masala, chili powder and salt for 20 minutes.",
      "Sear the chicken in a hot pan for 5-6 minutes until browned, then set aside.",
      "Melt the butter in the same pan and cook the onion for 5 minutes until soft.",
      "Add garlic, ginger and the rest of the garam masala and cook for 1 minute.",
      "Pour in the tomato puree and simmer for 10 minutes, then stir in the cream.",
      "Return the chicken to the sauce and simmer for 10 minutes. Garnish with coriander and serve with naan or rice.",
    ],
    nutritionFacts: {
      calories: 490,
      protein: 34,
      carbohydrates: 14,
      fat: 33,
      fiber: 2,
      sodium: 720,
    },
    chefTips: [
      "Blend the sauce before adding the chicken for a silky, restaurant-style finish",
      "Add a pinch of sugar if the tomatoes taste too sour",
      "Crush a little dried fenugreek (kasuri methi) on top for authentic flavor",
      "It tastes even better the next day once the flavors settle",
    ],
  },
  {
    name: "Classic Cheeseburger",
    difficulty: "Easy",
    cuisine: "American",
    info: "Juicy beef patty with melted cheddar on a toasted bun",
    image: "./assets/burger.jpg",
    rating: 4.6,
    reviews: 344,
    preparationTime: "10 min",
    cookingTime: 10,
    servingSize: 4,
    ingredients: [
      "600g ground beef (20% fat)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "1 tomato, sliced",
      "4 lettuce leaves",
      "1 red onion, sliced into rings",
      "4 tablespoons burger sauce or mayonnaise",
      "1 tablespoon butter",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Divide the beef into 4 balls and gently press into patties slightly wider than the buns.",
      "Season both sides of the patties generously with salt and pepper.",
      "Heat a skillet or grill over high heat and cook the patties for 3-4 minutes.",
      "Flip, place a slice of cheddar on each and cook for another 3 minutes until melted.",
      "Butter the buns and toast them in the pan for 1 minute.",
      "Spread sauce on the buns, then layer lettuce, patty, tomato and onion. Serve hot.",
    ],
    nutritionFacts: {
      calories: 650,
      protein: 38,
      carbohydrates: 32,
      fat: 40,
      fiber: 2,
      sodium: 890,
    },
    chefTips: [
      "Press a small dent in the center of each patty so it stays flat while cooking",
      "Only flip the burger once for the best crust",
      "Don't press down on the patty - you'll squeeze out the juices",
      "Let the patties rest for 2 minutes before serving",
    ],
  },
  {
    name: "Shakshuka",
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    info: "Eggs poached in a spiced tomato and pepper sauce",
    image: "./assets/shakshuka.jpg",
    rating: 4.7,
    reviews: 265,
    preparationTime: "10 min",
    cookingTime: 25,
    servingSize: 2,
    ingredients: [
      "4 large eggs",
      "1 can (400g) crushed tomatoes",
      "1 red bell pepper, diced",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 teaspoon ground cumin",
      "1 teaspoon smoked paprika",
      "2 tablespoons olive oil",
      "50g feta cheese, crumbled",
      "Fresh parsley, chopped",
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium heat and cook the onion and pepper for 5 minutes.",
      "Add garlic, cumin and paprika and cook for 1 minute until fragrant.",
      "Pour in the crushed tomatoes, season with salt and pepper, and simmer for 10 minutes.",
      "Make 4 small wells in the sauce and crack an egg into each one.",
      "Cover the pan and cook for 5-7 minutes until the whites are set but the yolks are still runny.",
      "Sprinkle with feta and parsley and serve straight from the pan with crusty bread.",
    ],
    nutritionFacts: {
      calories: 340,
      protein: 18,
      carbohydrates: 20,
      fat: 22,
      fiber: 5,
      sodium: 680,
    },
    chefTips: [
      "Simmer the sauce until thick so the eggs sit on top instead of sinking",
      "Cover the pan so the tops of the eggs cook through",
      "Add a pinch of chili flakes for a little heat",
      "Serve with warm bread to scoop up the sauce",
    ],
  },
  {
    name: "Moroccan Lamb Tagine",
    difficulty: "Hard",
    cuisine: "Moroccan",
    info: "Slow-cooked lamb with apricots, warm spices and golden almonds",
    image: "./assets/lamb-tagine.jpg",
    rating: 4.9,
    reviews: 231,
    preparationTime: "25 min",
    cookingTime: 120,
    servingSize: 6,
    ingredients: [
      "1kg lamb shoulder, cut into large chunks",
      "2 onions, finely chopped",
      "4 cloves garlic, minced",
      "1 tablespoon fresh ginger, grated",
      "2 teaspoons ground cumin",
      "2 teaspoons ground cinnamon",
      "1 teaspoon ground turmeric",
      "1 can (400g) chopped tomatoes",
      "2 cups beef or lamb stock",
      "1 cup dried apricots",
      "2 tablespoons honey",
      "1/3 cup almonds, toasted",
      "3 tablespoons olive oil",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Season the lamb with salt and pepper. Heat olive oil in a heavy pot and brown the lamb in batches, about 8 minutes per batch. Set aside.",
      "Lower the heat, add the onions and cook for 8 minutes until soft and golden.",
      "Stir in garlic, ginger, cumin, cinnamon and turmeric and cook for 1 minute until fragrant.",
      "Return the lamb to the pot, add the tomatoes and stock, and bring to a simmer.",
      "Cover and cook on low heat for 1 hour 30 minutes, stirring occasionally.",
      "Add the apricots and honey and cook uncovered for 20 more minutes until the lamb is very tender and the sauce is thick.",
      "Top with toasted almonds and coriander. Serve with couscous or warm flatbread.",
    ],
    nutritionFacts: {
      calories: 620,
      protein: 42,
      carbohydrates: 38,
      fat: 32,
      fiber: 5,
      sodium: 640,
    },
    chefTips: [
      "Use lamb shoulder - it becomes melt-in-your-mouth tender after slow cooking",
      "Brown the meat well first; the crust adds a lot of flavor to the sauce",
      "Keep the heat low so the lamb stays tender instead of tough",
      "Make it a day ahead - the spices taste even better the next day",
    ],
  },
];

function displayRecipe(recipe) {
  if (recipe.cookingTime > 45) {
    timeAlert.classList.remove("d-none");
  } else {
    timeAlert.classList.add("d-none");
  }
  rating.textContent = recipe.rating;
  reviewCount.textContent = "(" + recipe.reviews + " reviews)";
  prepTime.textContent = recipe.preparationTime;
  cookTime.textContent = recipe.cookingTime + " min";
  servings.textContent = recipe.servingSize + " people";
  difficulty.textContent = recipe.difficulty;
  cuisine.textContent = recipe.cuisine;
  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.info;
  recipeImage.style.backgroundImage = `url('${recipe.image}')`;
  ingredientsList.innerHTML = "";
  for (var j = 0; j < recipe.ingredients.length; j++) {
    var ingredient = recipe.ingredients[j];
    ingredientsList.innerHTML += `<li>${ingredient}</li>`;
  }
  instructionsList.innerHTML = "";
  for (var k = 0; k < recipe.instructions.length; k++) {
    var instruction = recipe.instructions[k];
    instructionsList.innerHTML += `<li>${instruction}</li>`;
  }
  calories.textContent = recipe.nutritionFacts.calories + " kcal";
  protein.textContent = recipe.nutritionFacts.protein + "g";
  carbohydrates.textContent = recipe.nutritionFacts.carbohydrates + "g";
  fat.textContent = recipe.nutritionFacts.fat + "g";
  fiber.textContent = recipe.nutritionFacts.fiber + "g";
  sodium.textContent = recipe.nutritionFacts.sodium + "mg";
  chefTip.innerHTML = "";
  for (var l = 0; l < recipe.chefTips.length; l++) {
    var tip = recipe.chefTips[l];
    chefTip.innerHTML += `
      <li class="chef">
        <i class="fa-solid fa-circle-check"></i>
        <span>${tip}</span>
      </li>
    `;
  }
}

function tryAnotherRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);
  displayRecipe(recipes[randomIndex]);
}

tryAnotherRecipe();
