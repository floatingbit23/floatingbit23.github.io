document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('form-response');
    const responseDiv2 = document.getElementById('form-response-fail');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://formspree.io/f/xkndyqke', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); // Limpia el formulario
                responseDiv.style.display = 'block'; // Muestra el mensaje de respuesta
                // responseDiv.textContent = 'Message sent!';
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            responseDiv2.style.display = 'block'; // Muestra el mensaje de error
            responseDiv2.textContent = 'There was a problem sending your message. Please check your connection or try again later.';
        }
    });
});
