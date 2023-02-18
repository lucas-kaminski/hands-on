from server import Server
from dotenv import load_dotenv

load_dotenv()

if __name__ == "__main__":
    server = Server()
    server.run()
