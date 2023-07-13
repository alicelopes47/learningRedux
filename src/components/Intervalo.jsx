import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Intervalo (props) {
    const { min, max } = props
    return (
        <Card title='intervalo de numeros' red>
            <span>
                <strong>Minimo</strong>
                <input type="number"  value={min} readOnly/>
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number"  value={max} readOnly/>
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

export default connect(mapStateToProps) (Intervalo)