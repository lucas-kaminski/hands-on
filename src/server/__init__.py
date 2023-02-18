from flask import Flask


class Server:
    def __init__(self):
        self.app = Flask(__name__)
        self.app.config["UPLOAD_FOLDER"] = "uploads"

    def run(self):
        self.app.run()
