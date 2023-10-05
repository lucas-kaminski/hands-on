from datetime import datetime
from models import BaseModel


class User(BaseModel):
    id: int
    uuid: str
    name: str
    email: str
    password: str
    created_at: datetime
    updated_at: datetime
    deleted_at: datetime

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
