import json
import random
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

with open("response.json") as file:
    data = json.load(file)

texts = []
labels = []

for intent in data["intents"]:
    for pattern in intent["patterns"]:
        texts.append(pattern.lower())
        labels.append(intent["tag"])

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

model = MultinomialNB()
model.fit(X, labels)

def get_response(mensaje):
    entrada = vectorizer.transform([mensaje.lower()])
    prediccion = model.predict(entrada)[0]

    for intent in data["intents"]:
        if intent["tag"] == prediccion:
            return random.choice(intent["responses"])
    return "Lo siento, no entendí eso."

