//action creator
export const NUM_MIN_ALTERADO = 'NUM_MIN_ALTERADO';
export const NUM_MAX_ALTERADO = 'NUM_MAX_ALTERADO'


export function alterarNumerorMinimo(novoNumero) {
    return{
        type:NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumerorMáximo(novoNumero) {
    return{
        type:NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}