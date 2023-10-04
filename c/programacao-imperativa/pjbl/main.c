#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <conio.h>


void lista();//CHAMADA DA FUNÇÃO QUE CRIA LISTA

int main(){
int codigo = 20;
while(codigo!=0){ //While criado para que o programa se repita até colocar o código que o finaliza

    setlocale(LC_ALL, "Portuguese");

    printf("Bem vindo a nossa loja\n");
    printf("--------------------------------------------------------------------------------------------------\n");
    printf("Promocao de hoje, leve 3 produtos iguais e ganhe 5%% de desconto no valor final do produto\n");
    printf("--------------------------------------------------------------------------------------------------\n");
    printf("Aqui esta a lista de produtos: \n");
    lista();


    // Declarando as variáveis
    int k = 0;
    int cod;
    char prods[10][50] = {"Tenis","Camiseta","Carteira","Meia","Vestido","Cinto","Bone","Calca","Touca","Luva"};
    int qtds[10] = {0,0,0,0,0,0,0,0,0,0};
    float precoFinal[10] = {0,0,0,0,0,0,0,0,0,0};
    float precos[10] = {150.00,50.00,30.00,10.00,100.00,15.00,40.00,120.00,30.00,15.00};
    float dinheiro, troco, totalParcial, total;
    total = 0;
    totalParcial = 0;
    //------------------------------------------------------------------------------------------------------------

    //While para que ele escolha os itens, até apertar zero e ir para o pagamento
    while (k==0){
        printf("Digite o codigo do produto que voce deseja, ou 0 para finalizar: \n > ");
        scanf("%i", &cod);

        switch(cod){

        case 1:
            qtds[0]++;
            totalParcial = totalParcial + precos[0];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[0]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 2:
            qtds[1]++;
            totalParcial = totalParcial + precos[1];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[1]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 3:
            qtds[2]++;
            totalParcial = totalParcial + precos[2];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[2]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 4:
            qtds[3]++;
            totalParcial = totalParcial + precos[3];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[3]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 5:
            qtds[4]++;
            totalParcial = totalParcial + precos[4];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[4]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 6:
            qtds[5]++;
            totalParcial = totalParcial + precos[5];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[5]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 7:
            qtds[6]++;
            totalParcial = totalParcial + precos[6];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[6]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 8:
            qtds[7]++;
            totalParcial = totalParcial + precos[7];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[7]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 9:
            qtds[8]++;
            totalParcial = totalParcial + precos[8];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[8]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 10:
            qtds[9]++;
            totalParcial = totalParcial + precos[9];
            printf("\nTotal Parcial: R$%.2f\n\n", totalParcial);
            if (qtds[9]==2){
                printf("\n-----------------------------------------------------------------------------------------\n");
                printf("Levando mais um produto semelhante voce ganha 5 porcento de desconto no final da compra, aproveite!\n");
                printf("-----------------------------------------------------------------------------------------\n\n");
            }
            break;
        case 0:
            k = 1;
            break;
        default:
            printf("\n------------------------------------\n");
            printf("Codigo invalido, Digite novamente!\n");
            printf("------------------------------------\n\n");
            break;
        }


    }

    //----------------------------------------------------------------------------------------------------------

    //FOR criado para determinar o preço final dos produtos, incluindo o desconto daqueles que tem mais de 3 em quantidade
    for (int i = 0; i < 10; i++){
        if(qtds[i]>=3){
            precoFinal[i] = qtds[i] *(precos[i]*0.95);
            total += precoFinal[i];
        }else{
            precoFinal[i] = qtds[i] *precos[i];
            total += precoFinal[i];
        }
    }
    //----------------------------------------------------------------------------------------------------------


    //Solicitação da quantidade de dinheiro
    printf("\n------------------------------------\n");
    printf("Digite quanto vai dar de dinheiro: \n > ");
    scanf("%f", &dinheiro);
    //----------------------------------------------------------------------------------------------------------


    //IF para personalizar o PRINT final, dependendo do total da compra. E também se o dinheiro vai ser suficiente
    if (total<=100.00){
        if(dinheiro >= total){
            troco = dinheiro - total;
            printf("\n------------------------------------\n");
            printf("RESUMO\n");
            for (int i = 0; i < 10; i++){
                if(qtds[i]>0){
                    printf("%s | QTD: %i | R$%.2f \n", prods[i], qtds[i], precoFinal[i]);
                }
            }
            printf("-------------------\n");
            printf("TOTAL | R$%.2f\n", total);
            printf("VALOR PAGO | R$%.2f\n", dinheiro);
            printf("TROCO | R$%.2f\n", troco);
            printf("--------------------------------------\n");
            printf("Obrigado, volte sempre!\n");
            printf("--------------------------------------\n");
        }else{
            printf("Valor eh menor que o total, infelizmente voce nao podera levar as compras!");
        }
    }else if (total<300.00){
        if(dinheiro >= total){
            troco = dinheiro - total;
            printf("\n------------------------------------\n");
            printf("RESUMO\n");
            for (int i = 0; i < 10; i++){
                if(qtds[i]>0){
                    printf("%s | QTD: %i | R$%.2f \n", prods[i], qtds[i], precoFinal[i]);
                }
            }
            printf("-------------------\n");
            printf("TOTAL | R$%.2f\n", total);
            printf("VALOR PAGO | R$%.2f\n", dinheiro);
            printf("TROCO | R$%.2f\n", troco);
            printf("--------------------------------------\n");
            printf("Cliente do coracao volte sempre!\n");
            printf("--------------------------------------\n");
        }else{
            printf("Valor eh menor que o total, infelizmente voce nao podera levar as compras!");
        } 
    }else{
        if(dinheiro >= total){
            troco = dinheiro - total;
            printf("\n------------------------------------\n");
            printf("RESUMO\n");
            for (int i = 0; i < 10; i++){
                if(qtds[i]>0){
                    printf("%s | QTD: %i | R$%.2f \n", prods[i], qtds[i], precoFinal[i]);
                }
            }
            printf("-------------------\n");
            printf("TOTAL | R$%.2f\n", total);
            printf("VALOR PAGO | R$%.2f\n", dinheiro);
            printf("TROCO | R$%.2f\n", troco);
            printf("--------------------------------------\n");
            printf("Voce eh um cliente sensacional, volte sempre!\n");
            printf("--------------------------------------\n");
        }else{
            printf("Valor eh menor que o total, infelizmente voce nao podera levar as compras!");
        }  
    }
    //----------------------------------------------------------------------------------------------------------

    //Código para finalizar o programa, digitando 0 o while é interrompido e o programa finalizado.
    printf("\n\nDigite 0 para finalizar o programa!");
    scanf("%i", &codigo);
    //----------------------------------------------------------------------------------------------------------

}

//Zerando as variáveis para uso posterior
int k = 0;
int cod;
char prods[10][50] = {"Tenis","Camiseta","Carteira","Meia","Vestido","Cinto","Bone","Calca","Touca","Luva"};
int qtds[10] = {0,0,0,0,0,0,0,0,0,0};
float precoFinal[10] = {0,0,0,0,0,0,0,0,0,0};
float precos[10] = {150.00,50.00,30.00,10.00,100.00,15.00,40.00,120.00,30.00,15.00};
float dinheiro, troco, totalParcial, total;
total = 0;
totalParcial = 0;
//----------------------------------------------------------------------------------------------------------


return 0;
}

//FUNÇÃO CRIADA PARA IMPRIMIR A LISTA DE PRODUTOS
void lista(){

    printf("----------------------------\n");
    printf("1  | Tenis     | R$150,00\n");
    printf("2  | Camiseta  | R$50,00\n");
    printf("3  | Carteira  | R$30,00\n");
    printf("4  | Meia      | R$10,00\n");
    printf("5  | Vestido   | R$100,00\n");
    printf("6  | Cinto     | R$15,00\n");
    printf("7  | Bone      | R$40,00\n");
    printf("8  | Calca     | R$120,00\n");
    printf("9  | Touca     | R$30,00\n");
    printf("10 | Luva      | R$15,00\n");
    printf("\n");
    printf("0 | Finalizar compra\n");
    printf("-----------------------------\n");

}

