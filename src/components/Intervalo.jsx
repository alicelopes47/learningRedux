import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumerorMinimo, alterarNumerorMáximo } from './../store/numeros/actions'

function Intervalo (props) {
    const { min, max } = props
    return (
        <Card title='intervalo de numeros' red>
            <span>
                <strong>Minimo</strong>
                <input type="number"  value={min} onChange={e => props.alterarMinimo(+e.target.value) }/>
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number"  value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
            </span>
        </Card>
    )
}

function mapStateToProps (state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps (dispatch) {
    return {
        alterarMinimo(novoNumero) {
           const action = alterarNumerorMinimo(novoNumero)
           dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumerorMáximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps
    ) (Intervalo);