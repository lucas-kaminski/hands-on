from flask import Blueprint, request
from database.dao.users import UsersDAO

blueprint = Blueprint("users", __name__)


@blueprint.route("/users", methods=["POST"])
def PostNewUser():
    body = request.get_json()

    must_have_fields = ["name", "email", "password"]
    new_user = {}
    for field in must_have_fields:
        if not body.get(field):
            return f"O campo {field} é obrigatório!"
        new_user[field] = body.get(field)

    id = UsersDAO().insertNewUser(**new_user)
    user = UsersDAO().selectUserById(id)
    print(new_user, id, user.__dict__)
    return "Usuário criado com sucesso!"
