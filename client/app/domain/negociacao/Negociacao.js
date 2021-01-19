class Negociacao {

    constructor(data, quantidade, valor) {
        
    // underline para aviso de usar métodos da própria classe
        this._data = data; // data atual
        this._quantidade = quantidade;
        this._valor = valor;
    }
    obtemVolume() {

        return this._quantidade * this._valor;
    }
}