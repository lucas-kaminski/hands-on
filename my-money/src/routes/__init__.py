import os
from server import Server


def register_blueprints(server: Server):
    all_valid_paths = [
        file
        for file in os.listdir("src/routes")
        if file != "__init__.py" and file.endswith(".py")
    ]
    for path in all_valid_paths:
        import_name = path.replace(".py", "")
        module = __import__(f"routes.{import_name}", fromlist=[import_name])
        if not module.blueprint:
            raise Exception(f"Blueprint not found in {import_name}")

        server.app.register_blueprint(module.blueprint)
