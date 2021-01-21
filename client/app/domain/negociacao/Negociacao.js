class Negociacao {

    constructor(data, quantidade, valor) {

    // underline regra e um aviso de usar métodos da própria classe
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);  // congelando instância no constructor
    }
    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }
// acessando método como se fosse propriedade usando o get
    get valor() {
        return this._valor;
    }

}