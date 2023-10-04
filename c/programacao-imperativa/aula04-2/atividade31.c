#include <stdio.h>
#include <stdlib.h>

int main(){
    int n, i;
    n = 10;
    for(i = n; i >= 0; i--){
        printf("%d ", i);
		//  i = 10; 10 >= 0; 10-1
		//  i = 9; 9 >= 0; 9-1
		//  i = 8; 9 >= 0; 8-1
    }
    return 0;
}