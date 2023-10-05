from dao import Connector
import os

connection = Connector().connection

for table in os.listdir("database/tables"):
    if not table.endswith(".sql"):
        continue
    table_name = table[:-4]
    print(f"Creating table {table_name}...")

    must_change_to_alter_table = False
    query = f"SELECT * FROM information_schema.tables WHERE table_name = '{table_name}'"
    cursor = connection.cursor()
    cursor.execute(query)
    result = cursor.fetchone()
    if result:
        must_change_to_alter_table = True
        print(f"Table {table_name} already exists. Changing to ALTER TABLE")

    with open(f"database/tables/{table}") as file:
        query = file.read()
        if must_change_to_alter_table:
            for word in ["CREATE TABLE"]:
                query = query.replace(word, "ALTER TABLE")
            for
        connection.cursor().execute(query)
        connection.commit()
        print(f"Table {table_name} created successfully!")
