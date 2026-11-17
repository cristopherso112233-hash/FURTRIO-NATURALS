import os
import secrets

from flask import Flask, jsonify, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PRODUCTS = [
    {
        "id": "goat-milk-honey-soap",
        "name": "Goat Milk & Honey Soap",
        "price": 130,
        "description": "A warm, creamy blend of goat milk and honey",
        "badge": "GOAT MILK",
    },
]

app = Flask(__name__, static_folder=None, template_folder=BASE_DIR)
app.secret_key = secrets.token_urlsafe(48)

PUBLIC_ASSETS = {
    "styles.css",
    "script.js",
    "842308706_122126653059126502_4774686602454261953_n.jpg",
    "goatmilk.png",
    "CEO.jpg",
    "furtio-naturals-logo-header.png",
    "paula.jpg",
    "packaging01.jpg",
    "packaging02.jpg",
    "packaging03.jpg",
}


@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/api/products")
def get_products():
    return jsonify(PRODUCTS)


@app.route("/<path:filename>")
def serve_static(filename):
    if filename in PUBLIC_ASSETS:
        return send_from_directory(BASE_DIR, filename)
    return "Not found", 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")), debug=False)
