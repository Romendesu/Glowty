from flask import Flask, render_template, request, jsonify
from chatbot import get_response
# Generar instancia en flask

app = Flask(__name__)

# Declaracion de rutas en flask

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/help")
def help():
    return render_template("chatbot.html")

@app.route("/ask", methods= ["POST"])
def ask():
    data = request.get_json()
    msg = data.get("mensaje")
    response = get_response(msg)
    return jsonify({"respuesta": response})

# Ejecuccion del server

if __name__ == "__main__":
    app.run(debug="true")