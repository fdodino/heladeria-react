import React from 'react'
import {orden} from '../domain/orden'

export function Gusto(props) {
    const color = Math.floor(Math.random() * 3)
    return (
        <div className={`capsulita color${color}`}>
            {props.gusto}
        </div>
    )
}

export function Pedido(props) {
    return (
        <div className="fila">
            <div className="columnaPedido">
                <div className="pino">{props.pedido.pino}</div>
                <div className="gustos">{props.pedido.gustos.map(gusto => <Gusto gusto={gusto}/>)}</div>
            </div>
            <div className="columnaPago">
                <input type="checkbox" checked={props.pedido.pago}/>
            </div>
        </div>
    )
}

export class TablaPedido extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orden,
        }
        this.agregarPedido.bind(this.agregarPedido)
    }

    agregarPedido({ pino, gusto1, gusto2 }) {
        const orden = {
            ...this.state.orden
        }
        orden.agregarPedido(pino, [gusto1, gusto2])
        this.setState({
            orden,
        })
    }

    render() {
        return (
            <div className="main">
                <h1>Pinohelados</h1>
                <div className="contenedor">
                    <div className="encabezado">
                        <div className="columnaPedido">Pedido</div>
                        <div className="columnaPago">¿Pagó?</div>
                    </div>
                    {this.props.orden.pedidos.map(pedido => <Pedido pedido={pedido} key={pedido.pino}/>)}
                </div>
                <div className="filtro">
                    <NuevoPedido onNewPedido={this.agregarPedido}/>
                </div>
            </div>
        )
    }
}

class NuevoPedido extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pino: "",
            gusto1: "Chocolate",
            gusto2: "",
        }
    }

    cambiarPino(pino) {
        this.setState({
            ...this.state,
            pino,
        })
    }

    cambiarGusto1(gusto1) {
        this.setState({
            ...this.state,
            gusto1: gusto1,
        })
    }

    cambiarGusto2(gusto2) {
        this.setState({
            ...this.state,
            gusto2: gusto2,
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="pino" onChange={(e) => this.cambiarPino(e.target.value)} value={this.state.pino}/>
                <input type="text" placeholder="gusto1" onChange={(e) => this.cambiarGusto1(e.target.value)} value={this.state.gusto1} />
                <input type="text" placeholder="gusto2" onChange={(e) => this.cambiarGusto2(e.target.value)} value={this.state.gusto2} />
                <button onClick={() => this.props.onNewPedido(this.state)}>Pedir!</button>
            </div>
        )
    }
}
