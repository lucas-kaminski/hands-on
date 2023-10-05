import mysql.connector
import os


class BaseDAO:
    def __init__(self):
        self.connection = Connector()


class Connector:
    def __init__(self):
        config = {
            "user": os.environ.get("MYSQL_USER"),
            "password": os.environ.get("MYSQL_PASSWORD"),
            "host": os.environ.get("MYSQL_HOST"),
            "database": os.environ.get("MYSQL_DATABASE"),
        }
        try:
            self.connection = mysql.connector.connect(**config)
            self.cursor = self.connection.cursor(dictionary=True)
        except Exception as e:
            print(f"Error connecting to database -> {str(e)}")
            exit()

    def commit(self):
        self.connection.commit()

    def close(self):
        self.cursor.close()
        self.connection.close()

    def getLastInsertedId(self):
        return self.cursor.lastrowid
