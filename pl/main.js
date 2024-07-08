document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-container');
    fetch('articles/articles.json')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                console.log(1)
                const articleElement = document.createElement('table');
                articleElement.classList.add('article')
                articleElement.innerHTML = `
                    <tr>
                    <td>
                        <p><a class="article-link" href="articles/${article.file}" target="_blank">
                                <b>${article.title}</b>
                            </a></p>
                        <a>${article.category}</a>
                    </td>
                    <td class="date"><a>${article.date}</a></td>
                </tr>
                `;
                articlesList.appendChild(articleElement);
            });
        });
});
