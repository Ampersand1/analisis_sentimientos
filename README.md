# Descripcion analisis_sentimientos
Este es un prototipo de analisis de sentimientos para textos largos. Este proyecto implementa un modelo de Huggin Face que analiza emociones en textos. Tiene una interfaz simple con 2 funcionalidades, una para analizar textos por parrrafos o completo y otra como muestra de la funcionalidad para comentarios en redes sociales.
# Instrucciones
Clone el repositorio e instale es su entorno virtual las herramientas necesarias:

python3 -m venv env 

pip install fastapi 

pip3 install "uvicorn[standard]" 

pip install transformers    

pip install tensorflow

pip install favicon

pip install tf-keras

Para verificar el funcionamiento de FastAPI, que es la API implementada para el proyecto use python -m uvicorn main:app --port 3001 --reload

