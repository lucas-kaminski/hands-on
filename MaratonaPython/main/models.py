#abstração de tabelas do BD

from django.db import models
from datetime import datetime


class Categoria(models.Model): #tabela do banco de dados chamado Categoria
    #id auto increment, int e primary key criado automaticamente
    categoria = models.CharField(max_length=100) #coluna que aceita Char

    def __str__(self):
        return self.categoria


class Foto(models.Model):
    imagem = models.FileField(upload_to="galeria")
    categoria = models.ForeignKey(Categoria, on_delete=models.DO_NOTHING)
    titulo = models.CharField(max_length=50)
    descricao = models.CharField(max_length=1000)
    data = models.DateField(datetime.now().strftime("%Y-%m-%d"))
    oculta = models.BooleanField(default=False)

    def __str__(self): #retorna o titulo do objeto
        return self.imagem

