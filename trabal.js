document.addEventListener('selectionchange', function(event) {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0){
        alert('Conteúdo Bloqueado');
        window.getSelection().removeAllRanges();
    }
});