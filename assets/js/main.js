const domains = {
    'pl': ['Fizyka', 'Informatyka', 'Matematyka', 'Filozofia Nauki'],
    'en': ['Physics', 'Computer Science', 'Mathematics', 'Philosophy of Science']
};

document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.getElementById('articles-container');
    
    // Get the language of the page from the <html> element
    const language = document.documentElement.lang;
    
    fetch('/articles/articles.json')
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article-box');
                
                // Process authors: remove any links and only display the author names
                const authors = article.authors.split(',').map(author => {
                    const match = author.trim().match(/(.+?)\s\[(.+?)\]/);
                    return match ? match[1] : author.trim();
                }).join(', ');

                // Choose the appropriate title based on the language
                const title = language === 'pl' ? article.title_pl : article.title_en;
                const abstract = language === 'pl' ? article.abstract_pl : article.abstract_en;
                const domain = domains[language][article.domain_id]; // Translate domain based on language

                // Generate the HTML structure for each article
                articleElement.innerHTML = `
                <a class="article-link" href="/articles/${article.slug}/${language}" target="_self">
                    <table class="article cat-${article.domain_id}">
                        <tbody>
                            <tr>
                                <td>
                                    <p>
                                        <b>${title}</b>
                                    </p>
                                    <p>${authors}</p> <!-- Display authors without links -->
                                    <p>${domain}</p> <!-- Display translated domain -->
                                </td>
                                <td class="date"><a>${article.date}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </a>
                `;
                
                // Append the article to the container
                articlesList.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});
