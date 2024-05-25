document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#submit-button');
    const form2 = document.querySelector('#button-parrafos');
    const resultadoDiv = document.querySelector('#resultado');

    form.addEventListener('click', async () => {
        console.log('ENTRO AL SUBMIT BOTON');
        const texto = document.querySelector('#texto-input').value;

        try {
            // Enviar una solicitud GET al servidor
            const response = await fetch(`http://localhost:3001/analizar/?texto=${encodeURIComponent(texto)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Convertir la respuesta a formato JSON
            const data = await response.json();
            // Multiplicar data.score por 100
            const scoreMultiplicado = data.score * 100;
            // Mapear el valor de data.sentimiento a una descripción
            let descripcionSentimiento;
            switch (data.sentimiento) {
                case "1 star":
                    descripcionSentimiento = "muy negativo";
                    break;
                case "2 stars":
                    descripcionSentimiento = "negativo";
                    break;
                case "3 stars":
                    descripcionSentimiento = "neutro";
                    break;
                case "4 stars":
                    descripcionSentimiento = "bueno";
                    break;
                case "5 stars":
                    descripcionSentimiento = "muy bueno";
                    break;
                default:
                    descripcionSentimiento = "desconocido";
            }
            // Mostrar los resultados en el div de resultados
            resultadoDiv.innerHTML = `Estado de emociones del texto: ${descripcionSentimiento}, Porcentaje de Accuracy: ${scoreMultiplicado}%`;
        } catch (error) {
            // Muestra el mensaje de error en caso de que ocurra un error en la solicitud
            document.getElementById('resultado').innerText = `Error: ${error.message}`;
        }
    });

    form2.addEventListener('click', async () => {
        console.log('ENTRO AL SUBMIT BOTON');
        const texto = document.querySelector('#texto-input').value;

        try {
            // Dividir el texto en párrafos utilizando el punto como delimitador
            const parrafos = texto.split('.');

            // Array para almacenar los resultados de cada párrafo
            const resultados = [];

            // Recorrer cada párrafo y enviar una solicitud GET al servidor para calificar las emociones
            for (const parrafo of parrafos) {
                // Enviar una solicitud GET al servidor
                const response = await fetch(`http://localhost:3001/analizar/?texto=${encodeURIComponent(parrafo)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                // Convertir la respuesta a formato JSON
                const data = await response.json();

                // Multiplicar data.score por 100
                const scoreMultiplicado = data.score * 100;

                // Mapear el valor de data.sentimiento a una descripción
                let descripcionSentimiento;
                switch (data.sentimiento) {
                    case "1 star":
                        descripcionSentimiento = "muy negativo";
                        break;
                    case "2 stars":
                        descripcionSentimiento = "negativo";
                        break;
                    case "3 stars":
                        descripcionSentimiento = "neutro";
                        break;
                    case "4 stars":
                        descripcionSentimiento = "bueno";
                        break;
                    case "5 stars":
                        descripcionSentimiento = "muy bueno";
                        break;
                    default:
                        descripcionSentimiento = "desconocido";
                }

                // Agregar los resultados del párrafo al array de resultados
                resultados.push({ parrafo: parrafo.trim(), sentimiento: descripcionSentimiento, score: scoreMultiplicado });
            }

            // Mostrar los resultados en el div de resultados
            resultadoDiv.innerHTML = resultados.map(resultado => `Párrafo: ${resultado.parrafo}, Sentimiento: ${resultado.sentimiento}, Score: ${resultado.score}`).join('<br>');

        } catch (error) {
            // Muestra el mensaje de error en caso de que ocurra un error en la solicitud
            document.getElementById('resultado').innerText = `Error: ${error.message}`;
        }
    });
});



