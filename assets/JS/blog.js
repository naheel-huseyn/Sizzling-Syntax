    
    document.addEventListener("DOMContentLoaded", function(){
      fetch("assets/JS/blog.json")
    .then(response => response.json())
    .then(Recipes => Recipes.filter(a => a.type == "blog"))
    .then(Data => {
      var container = $("#blog_container");
      var articleData = ""
      Data.forEach(function(recipe) {
          articleData += `
      <div class="blog-post row align-items-center"  data-aos-delay="100">
      <div class="col-md-6">
        <img src="assets/images/${recipe.img}" alt="Donuts" class="img-fluid blog-img mb-3 mb-md-0" />
      </div>
      <div class="col-md-6 ps-md-5">
        <h3 class="theme-color">${recipe.heading1}</h3>
        <p>${recipe.paragraph}</p>
        <a href="article.html?id=${recipe.id}" class="btn btn-theme btn-sm">Read More</a>
      </div>
    </div>
      `;
      
    });
    container.append(articleData);
    })
    .catch(error => console.error("Error loading recipes:", error));
});