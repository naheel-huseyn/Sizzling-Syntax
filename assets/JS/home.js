    
    document.addEventListener("DOMContentLoaded", function(){
      fetch("assets/JS/home.json")
    .then(response => response.json())
    .then(Recipes => Recipes.filter(a => a.type == "home"))
    .then(Data => {
      var container = $("#home_container");
      var articleData = ""
      Data.forEach(function(recipe) {
          articleData += `
   <div class="col-md-4">
        <div class="card shadow-sm mb-3" >
          <img src="assets/images/${recipe.img}" class="card-img-top" alt="Pasta">
          <div class="card-body">
            <h5 class="card-title">${recipe.heading1}</h5>
            <p class="card-text short-text">${recipe.paragraph}</p>
            <div class="d-flex justify-content-center mt-3">
            <a href="article.html?id=${recipe.id}" class="btn btn-theme-outline btn-sm">Read Recipe</a>
          </div>
        </div>
        </div>
      </div>
      `;
      
    });
    container.append(articleData);
    })
    .catch(error => console.error("Error loading recipes:", error));
});