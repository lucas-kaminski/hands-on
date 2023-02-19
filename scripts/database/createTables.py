from database.connector import Connector
import os

connection = Connector().connection

for table in os.listdir("database/tables"):
    if not table.endswith(".sql"):
        continue

    with open(f"database/tables/{table}") as file:
        query = file.read()
        connection.cursor().execute(query)
        connection.commit()
