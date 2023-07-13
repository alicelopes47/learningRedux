import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Media =  props => {
    const {min, max} = props
    const {primeiroNome} = props
    return (
        <Card title='Media de numeros' purple>
            <span>
                <strong>Resultado:</strong>
                <strong>{(min + max) / 2}</strong>
            </span>
            <h1>{primeiroNome}</h1>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps) (Media)