// L = a comprimento [m]
// A = área de seção transversal [mm²]
// mat = material => resistividade de material => ro
// se for cobre igual a 0.017 
// se for alumínio igual a 0.028

function calcularResistencia(L, A, mat){
    return (mat * L) / A
}
// atribui o valor do material 
// se for cobre igual a 0.017 
// se for alumínio igual a 0.028
function verTipoMaterial(mat){
    const cobre = 0.017
    const aluminio = 0.028
    if(mat === 'cobre'){
        return cobre
    }else if(mat === 'aluminio'){
        return aluminio
    }else{
        return 'material inválido'
    }
}

function principal(){
    let material = 'cobre'  // cobre, aluminio 
    let resistencia = 0.0
    let comprimento = 1000
    let area = 6.0

    let mensagem = ''

    let mat = verTipoMaterial(material)
    console.log(mat)

    resistencia = calcularResistencia(comprimento, area, mat)
    console.log(resistencia)
}


principal()