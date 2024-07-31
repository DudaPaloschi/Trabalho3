var reader = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(modeloCarroNovo, kmsNovo, gasolinaNovo) {
        this.modeloCarro = modeloCarroNovo;
        this.kms = kmsNovo;
        this.gasolina = gasolinaNovo;
    }
    Carro.prototype.getCarro = function () {
        //você irá implementar um console.log que imprime todos os atributos do carro
        console.log("Modelo: ".concat(this.modeloCarro, ", Kms: ").concat(this.kms, " e \n        Gasolina: ").concat(this.gasolina));
    };
    Carro.prototype.setCarro = function () {
        //recriar o constructor agora pedindo os valores para o usuário
        var modeloCarroUpdate = reader.question("Insira o modelo do carro: ");
        var kmsCarroUpdate = reader.questionInt("Insira o kms do carro:");
        var gasolinaCarroUpdate = reader.questionInt("Insira a quantidade de gasolina do carro:");
        this.modeloCarro = modeloCarroUpdate;
        this.kms = kmsCarroUpdate;
        this.gasolina = gasolinaCarroUpdate;
    };
    Carro.prototype.andar = function () {
        var distanciaCarro = reader.questionInt("Insira a distancia:");
        var gasolinaAbastecer = distanciaCarro * gasolina;
        //fazer o cálculo do gasto da gasolina, pedir a distancia para o usuario
    };
    Carro.prototype.obterGasolina = function () {
        console.log(gasolina);
    };
    Carro.prototype.adicionarGasolina = function () {
        this.gasolina += gasolinaAbastecer;
    };
    return Carro;
}());
