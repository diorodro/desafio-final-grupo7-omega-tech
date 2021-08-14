
export class Carga{

    public nomeEmpresa: string
    public consumoKwh: number

    constructor(empresa: string, Kwh: number) {
        this.nomeEmpresa = empresa
        this.consumoKwh = Kwh
    }
}