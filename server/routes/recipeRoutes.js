const express=require('express');
const router=express.Router();
const recipeController=require('../controllers/recipeController');


/**
 * App Route
*/
//We assign recipeController.homepage as async function , hence it must be returning promise
// Get(pre-defined) must be capable of handling promise 
router.get('/',recipeController.homepage);

//Whenever click on product it's recipe we can see 
// /:id -> id can be variable /recipe/-variable(id)-
router.get('/recipe/:id',recipeController.exploreRecipe);

// Get /categories
router.get('/categories',recipeController.exploreCategories);

// Get /categories
router.get('/categories/:id',recipeController.exploreCategoriesById);


//Post search Page
router.post('/search',recipeController.searchRecipe);

// get for Explore Latest
router.get('/explore-latest',recipeController.exploreLatest);

// get for Random Recipe
router.get('/explore-random',recipeController.exploreRandom);

//Submit Recipe
router.get('/submit-recipe',recipeController.submitRecipe);

//Submit Recipe-> when posting new data
router.post('/submit-recipe',recipeController.submitRecipeOnPost);


module.exports=router;