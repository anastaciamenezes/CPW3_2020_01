export default class Cliente {

    constructor(nome, cpf, endereco, telefone) {
        Object.assign(this, { nome, cpf, endereco, telefone });
    }
}