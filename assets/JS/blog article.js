document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    fetch("assets/JS/blog.json")
        .then(response => response.json())
        .then(articles => {
            const article = articles.find(a => a.id === articleId);
            if (article) {
                renderArticle(article);
            }
        })
        .catch(error => console.error("Error loading article:", error));
});

function renderArticle(article) {
    const content = document.querySelector(".content");

    content.innerHTML = `
        <p><strong>By Sizzling Syntax</strong>
        <h1>${article.heading1}</h1>

        <img src="assets/images/${article.img}" alt="Dish Image" class="img-fluid rounded shadow mb-4">


        <h2>${article.heading2}</h2>

        <p>${article.des1}</p>


        <h2>${article.heading3}</h2>

        <p>${article.des2}</p>
    `;
}
