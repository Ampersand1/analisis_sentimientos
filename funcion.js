document.addEventListener('DOMContentLoaded', () => {
    const commentTextarea = document.getElementById('comment');
    const submitButton = document.getElementById('submit-button');
    const messageParagraph = document.getElementById('message');

    submitButton.addEventListener('click', async () => {
        const comentario = commentTextarea.value;

        try {
            const response = await fetch(`http://localhost:3001/analizar/?texto=${encodeURIComponent(comentario)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.sentimiento === '1 star' || data.sentimiento === '2 stars') {
                showMessage('Tu comentario es muy negativo o negativo y no puede ser publicado.', 'error');
            } else {
                showMessage('Tu comentario ha sido publicado.', 'success');
            }
        } catch (error) {
            showMessage(`Error: ${error.message}`, 'error');
        }
    });

    function showMessage(message, type) {
        messageParagraph.textContent = message;
        messageParagraph.classList.remove('hidden');
        messageParagraph.classList.remove('success');
        messageParagraph.classList.remove('error');
        messageParagraph.classList.add(type);
    }
});
