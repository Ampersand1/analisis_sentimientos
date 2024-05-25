from fastapi import FastAPI
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

clasificador = pipeline('sentiment-analysis', model='nlptown/bert-base-multilingual-uncased-sentiment')

@app.post("/analizar_sentimientos/")
def analizar_sentimiento_hf(texto: str):
    resultado = clasificador(texto)
    return {"sentimiento": resultado[0]['label'], "score": resultado[0]['score']}

@app.get("/analizar/")
def analizar_sentimiento_desde_get(texto: str):
    resultado = clasificador(texto)
    return {"sentimiento": resultado[0]['label'], "score": resultado[0]['score']}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

    
