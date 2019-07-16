export class Pedido {
    constructor(pino, gustos) {
        this.pino = pino
        this.gustos = gustos
        this.pago = false
    }
    pagar() {
        this.pago = true
    }
}

const pedidosPinos = [
    new Pedido('lauta', ['dulce de leche', 'banana split']),
    new Pedido('feche', ['dulce de leche', 'limón']),
    new Pedido('dodain', ['chocolate intenso', 'dulce de leche']),
]

export const orden = {
    pedidos: pedidosPinos,
    agregarPedido(pino, gustos) {
        this.pedidos.push(new Pedido(pino, gustos))
    }
}
