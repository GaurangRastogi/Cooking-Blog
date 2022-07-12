let addIngredientBtn=document.getElementById('addIngredientsBtn');
let ingredientList=document.querySelector('.ingredientList');
let ingredientDiv= document.querySelectorAll('.ingredientDiv')[0];

addIngredientBtn.addEventListener('click',function(){
    let newIngredients=ingredientDiv.cloneNode(true);
    let input=newIngredients.getElementsByTagName('input')[0];
    input.value='';
    ingredientList.appendChild(newIngredients);
});