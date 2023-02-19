from server import Server
from routes import register_blueprints
from dotenv import load_dotenv


load_dotenv()

if __name__ == "__main__":
    server = Server()
    register_blueprints(server)
    server.run()
