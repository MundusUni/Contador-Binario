function contagem() {
    let inputnumero = document.getElementById('txtn')
    let div = document.getElementById("div2")
    i = (inputnumero.value)
    
    div.innerHTML = ""

    switch(i) {
        case "0000":
            n = 0
            break
        case "0001":
            n = 1
            break
        case "0010":
            n = 2
            break
        case "0011":
            n = 3
            break
        case "0100":
            n = 4
            break
        case "0101":
            n = 5
            break
        case "0110":
            n = 6
            break
        case "0111":
            n = 7
            break
        case "1000":
            n = 8
            break
        case "1001":
            n = 9
            break
        default:
            n = inputnumero
            break
    }
    div.innerHTML = `Seu Número Binário é ${n}`
}
