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
    let resposta = document.getElementById(`resposta`)
    let calcular = document.getElementById(`calcular`)

    calcular.addEventListener(`click`, ()=>{
        let material = document.getElementById(`material`).value  // cobre, aluminio 
        let resistencia = 0.0
        let comprimento = Number(document.getElementById(`comprimento`).value)
        let area = Number(document.getElementById(`area`).value)
    
        
        let mat = verTipoMaterial(material)
    
        resistencia = calcularResistencia(comprimento, area, mat)
    
        resposta.innerHTML = ''
        resposta.innerHTML += `${mat}`
        resposta.innerHTML = `Resultado da resistência do condutor: ${resistencia.toFixed(3)} Ω`
        resposta.style.fontSize = '2rem'
        resposta.style.fontWeight = 'bold'
        resposta.style.fontFamily = 'Verdana'
        resposta.innerHTML += '<br>'
    
    }) 

    // a função principal foi substituida por uma arrow function  ()=>