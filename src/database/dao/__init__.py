from database.connector import Connector


class BaseDAO:
    def __init__(self):
        self.connection = Connector()
