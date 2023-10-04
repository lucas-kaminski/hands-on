/*
 * Copyright (c) 2016 Paulo Henrique Rodrigues Pinheiro <paulo@sysincloud.it>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

#include <stdio.h>  /* puts/printf */
#include <stdlib.h> /* EXIT_* */

#include "minunit.h"
#include "natural.h"

/* declarado no cabeçalho minunit e definido aqui */
int tests_run = 0;

static char *testa_parametros(void)
{
    puts("=> testa_parametros");

    mu_assert("Primeiro parâmetro inválido.", -1 == N_subtracao(-1, 10));
    mu_assert("Segundo parâmetro inválido.", -1 == N_subtracao(10, -1));
    mu_assert("Os dois parâmetros inválidos", -1 == N_subtracao(-10, -20));

    return 0;
}

static char *testa_resultado_nao_N(void)
{
    puts("=> testa_resultado_nao_N");

    mu_assert("Resultado negativo.", -1 == N_subtracao(10, 20));

    return 0;
}

static char *testa_resultados_validos(void)
{
    puts("=> testa_resultados_validos");

    mu_assert("0-0", 0 == N_subtracao(0, 0));
    mu_assert("10-0", 10 == N_subtracao(10, 0));
    mu_assert("10-10", 0 == N_subtracao(10, 10));
    mu_assert("20-10", 10 == N_subtracao(20, 10));

    return 0;
}

static char *testes(void)
{
    mu_run_test(testa_parametros);
    mu_run_test(testa_resultado_nao_N);
    mu_run_test(testa_resultados_validos);

    return 0;
}

int main(void)
{
    char *saida;

    saida = testes();

    if (0 != saida)
    {
        puts(saida);
        return EXIT_FAILURE;
    }

    puts("TESTES EXECUTADOS COM SUCESSO");
    printf("Testes executados: %d\n", tests_run);

    return EXIT_SUCCESS;
}
