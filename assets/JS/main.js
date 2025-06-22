
document.addEventListener("DOMContentLoaded", function() {

    const currentCountry = window.location.pathname
        .split('/').pop()          
        .replace('.html', '')     
        .toLowerCase();            
   
    fetch("assets/JS/recipes.json")
        .then(response => response.json())
        .then(allRecipes => {
        
            const countryRecipes = allRecipes.filter(recipe => 
                recipe.country.toLowerCase() === currentCountry
            );
            
           
            renderCards(countryRecipes);
        })
        .catch(error => console.error("Error loading recipes:", error));
});

function renderCards(recipesList) {
    const container = document.getElementById("recipes_container");
    if (!container) return;

    let html = "";
    recipesList.forEach(recipe => {
        html += `
           <div class="col-md-6 mb-4">
<div class="card mb-4 shadow-sm">
            <div class="card-news text-center">
              <h4>${recipe.category}</h4>
              <img src="assets/images/${recipe.img}" class="news-image" alt="img">
              <h4>${recipe.heading1}</h4>
             <p class="short-text">${recipe.paragraph}</p>
              <a href="article.html?id=${recipe.id}" class="btn btn-theme btn-md">Read More</a>
            </div>
             </div>
          </div>
        `;
    });
    container.innerHTML = html;
}