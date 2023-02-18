import mysql.connector
import os

class Connector:
  def __init__(self):
    config = {
      "user": os.environ.get("MYSQL_USER"),
      "password": os.environ.get("MYSQL_PASSWORD"),
      "host": os.environ.get("MYSQL_HOST"),
      "database": os.environ.get("MYSQL_DATABASE")
    }
    try:
      self.connection = mysql.connector.connect(**config)
    except Exception as e:
      print(f"Error connecting to database -> {str(e)}")
      exit()


