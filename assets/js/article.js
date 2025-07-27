function openPDF(lang) {
    // lang = 'pl','en'
    const slug = document.querySelector('meta[name=slug]').getAttribute('content');
    const pdfFileUrl = '/data/pdfs/' + slug + "/" + lang + "/" + slug + "_" + lang + '.pdf';
    const viewerUrl = '/assets/pdfjs/web/viewer.html?file=' + pdfFileUrl;
    window.open(viewerUrl, '_self');
}

// Call the function to handle the redirect on page load
window.onload = handleLanguageRedirect;
