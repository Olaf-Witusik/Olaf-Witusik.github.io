categories = ['Fizyka','Informatyka','Matematyka','Filozofia Nauki'];
document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-container');
    fetch('articles/articles.json')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                console.log(1)
                const articleElement = document.createElement('div');
                articleElement.classList.add('article-box');
                articleElement.innerHTML = `
                <a class=\"article-link\" href=\"articles/${article.file}\">
                <table class=\"article cat-${categories.indexOf(article.category)}\">
                <tbody>
                <tr>
                    <td>
                        <p>
                            <b>${article.title}</b>
                        </p>
                        <p><a>${article.category}</a></p>
                    </td>
                    <td class=\"date\"><a>${article.date}</a></td>
                </tr>
                </tbody>
                </table>
                </a>
                `;
                articlesList.appendChild(articleElement);
            });
        });
});
