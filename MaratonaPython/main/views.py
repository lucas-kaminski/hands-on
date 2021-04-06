from django.shortcuts import render
from django.http import HttpResponse
from .models import Categoria, Foto

def galeria(request):
    categorias = Categoria.objects.all()
    fotos = Foto.objects.all()
    return render(request, 'galeria.html', {'categorias': categorias, "fotos":fotos})  # renderia um html | por padrão busca numa pasta chamada templates


def categoria(request, id):
    #cat = Categoria.objects.all()
    fotos = Foto.objects.filter(categoria_id=id)
    return render(request, 'categoria.html', {"fotos":fotos})

def imagem(request, id):
    imagem = Foto.objects.filter(id=id)
    return render(request, 'imagem.html', {"imagem":imagem[0]})
