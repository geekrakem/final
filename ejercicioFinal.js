/*
Especificaçao   Código  Preço
Cachorro Quente 100     R$ 1,20
Bauru Simple    101     R$ 1,30
Bauru com ovo   102     R$ 1,50
Hambúrguer      103     R$ 1,20
Cheesebúrguer   104     R$ 1,30
Refrigerante    105     R$ 1,00

Faça um  programa que leia o codigo dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total general do pedido, o pedido é encerrado quando o cliente digitar o codigo 999, controlar para que o cliente só possa digitar os codigos do menu

cod......100.....15.....115,00
cod......101.....10.....100,00

valor Total 215,00

*/

var prompt = require('prompt-sync')();
const menu = [
              { codigo: 100, precio: 1.20 },
              { codigo: 101, precio: 1.30 }, 
              { codigo: 102, precio: 1.50 },
              { codigo: 103, precio: 1.20 },
              { codigo: 104, precio: 1.30 },
              { codigo: 105, precio: 1.00 }
            ];


var codigoProducto = 0;
var valorPagar = 0;
var costoTotal = 0;
var valorCodigo = 0;
var cantidadProducto = 0;
var cod = [];

let j = 0;

while(true){

    codigoProducto = Number(prompt(`Ingrese o Código `));

    if (codigoProducto === 999){

        break;

    }else {

        for (var i = 0; i < menu.length; i ++){

            if (codigoProducto === menu[i].codigo){

                cod = codigoProducto;

                //console.log(`El codigo seleccionado fue ${codigoProducto}`);

                cantidadProducto = Number(prompt(`Ingrese a cantidade `));
                valorCodigo = menu[i].precio * cantidadProducto;

                //console.log(`costo Items ${valorCodigo}`);

                valorPagar += valorCodigo;

                //console.log(`COSTO TOTAL ${valorPagar}`);

            }
        }
    }
   
    
j++;

}
console.log(`cod...${cod}cant...${cantidadProducto}...valor${valorCodigo}`);
console.log(`TOTAL : R$ ${valorPagar.toFixed(2)}`);