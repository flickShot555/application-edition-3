#!/usr/bin/env python
from flask import Flask, request, jsonify
from flask_cors import CORS
import os, sys

sys.path.insert(0, os.path.dirname(__file__))
import vectorize_and_upsert

app = Flask(__name__)
CORS(app)

@app.route("/vectorize", methods=["POST"])
def vectorize():
    data = request.get_json() or {}
    file_path = data.get("filePath")
    if not file_path or not os.path.isfile(file_path):
        return jsonify({"error":"Invalid filePath"}), 400
    try:
        doc_id = vectorize_and_upsert.process_and_upsert(file_path)
        return jsonify({"status":"success","documentId":doc_id}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # When run as CGI, Flask will handle internally
    app.run()
