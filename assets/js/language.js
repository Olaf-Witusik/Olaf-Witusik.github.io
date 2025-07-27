// Function to detect the preferred language
function getPreferredLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.split('-')[0].toLowerCase(); // Extracts the language code (e.g., 'en' from 'en-US')
}


var preferredLang;

// Function to display the custom modal
function showModal(message, onYes, onNo) {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${message}</h2>
            <div class="modal-actions">
                <button id="yes-btn">${((preferredLang === 'pl') ? 'Tak' : 'Yes')}</button>
                <button id="no-btn">${((preferredLang === 'pl') ? 'Nie' : 'No')}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('yes-btn').onclick = function() {
        onYes();
        modal.remove();
    };
    document.getElementById('no-btn').onclick = function() {
        onNo();
        modal.remove();
    };
}

// Function to handle the redirect logic based on preferred language
function handleLanguageRedirect() {
    console.log("executed")
    preferredLang = getPreferredLanguage();
    const currentLang = window.location.pathname.includes('index_en.html') ? 'en' : 'pl';
    
    // Check if the user is on the wrong page based on their preferred language
    if (currentLang === 'pl' && preferredLang !== 'pl') {
        console.log("switch")
        // User is on the Polish page but prefers a different language (like English)
        showModal(
            'An English version of this website is available,<br> would you like to redirect there?',
            function() {
                window.location.href = 'index_en.html'; // Redirect to the English page
            },
            function() {
                console.log('User chose not to switch.');
            }
        );
    } else if (currentLang === 'en' && preferredLang === 'pl') {
        console.log("zmiana")
        // User is on the English page but prefers a different language (like Polish)
        showModal(
            'Dostępna jest polska wersja strony,<br> czy chcesz do niej przejść?',
            function() {
                window.location.href = 'index.html'; // Redirect to the Polish page
            },
            function() {
                console.log('User chose not to switch.');
            }
        );
    }
}