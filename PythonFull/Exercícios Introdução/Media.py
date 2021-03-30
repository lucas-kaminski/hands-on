#parte 1
total = 0

for i in range (1,5):
    nota = float(input(f'Insira a {i}ª nota'))
    total += nota

media = total / i
print(f"A média é {media}")

#parte 2
if media >= 7:
    print("Aprovado")
else:
    print("Reprovado")