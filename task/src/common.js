import { Alert, Platform } from 'react-native'

/*
MUDA SE A APLICAÇÃO FOR FICAR NA NUVEM...
*/
const server = Platform.OS === 'ios' ?
    'http://localhost:3000' : 'http://10.0.2.2:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema! (common.js)', 'Mensagem:',  `${err}`)
}

export { server, showError }