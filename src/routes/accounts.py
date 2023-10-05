from flask import Blueprint, request

blueprint = Blueprint("accounts", __name__)


@blueprint.route("/accounts", methods=["POST"])
def PostNewUser():
    body = request.get_json()
    print(body)
    return "Usuário criado com sucesso!"
