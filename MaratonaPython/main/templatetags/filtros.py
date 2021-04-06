from django import template

register = template.Library()

@register.filter(name="converte_data")
def converte_data(data):
    return data.strftime("%d/%m/%Y")
