from database.dao import BaseDAO
from models.users import User


class UsersDAO(BaseDAO):
    def __init__(self):
        super().__init__()

    def insertNewUser(self, name, email, password):
        sql = f"INSERT INTO users (UUID, NAME, EMAIL, PASSWORD) VALUES (UUID(), %s, %s, %s)"
        params = (name, email, password)
        self.connection.cursor.execute(sql, params)
        self.connection.commit()
        return self.connection.getLastInsertedId()

    def selectUserById(self, id):
        sql = f"SELECT * FROM users WHERE ID = %s"
        params = (id,)
        self.connection.cursor.execute(sql, params)
        result = self.connection.cursor.fetchone()
        if result:
            return User(**result)
