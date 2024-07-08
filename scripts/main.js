document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-list');
    fetch('../scripts/articles.json')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="../articles/${article.file}" target="_blank">Czytaj więcej</a>
                `;
                articlesList.appendChild(articleElement);
            });
        });
});
