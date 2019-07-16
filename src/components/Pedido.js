import React from "react"

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
        <div class="fila">
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

export function TablaPedido(props) {
    return (
        <div className="main">
            <h1>Pinohelados</h1>
            <div className="contenedor">
                <div className="encabezado">
                    <div className="columnaPedido">Pedido</div>
                    <div className="columnaPago">¿Pagó?</div>
                </div>
                {props.orden.pedidos.map(pedido => <Pedido pedido={pedido} key={pedido.pino}/>)}
            </div>
        </div>
    )
}
