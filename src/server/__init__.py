import os
from flask import Flask


class Server:
    def __init__(self):
        self.app = Flask(__name__)
        self.app.config["UPLOAD_FOLDER"] = "uploads"

    def run(self):
        is_development_environment = os.environ.get("ENVIRONMENT") == "development"
        self.app.run(debug=is_development_environment)
