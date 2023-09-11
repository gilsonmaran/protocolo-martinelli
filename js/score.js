// ---------------------------
// CALCULAR SCORE
// ---------------------------
let score = 0
const infoScore = document.getElementById('info-score')
const inputs = [...document.querySelectorAll('input[type="radio"]')]

inputs.forEach(e => {
    e.addEventListener('click', () => {
        score = calculateScore()
        showResult()

        infoScore.innerText = score < 2
            ? `${score} ponto`
            : `${score} pontos`
    })
})

function calculateScore() {
    let points = 0

    inputs.forEach(input => {
        if (input.checked && input.value != 'on') {
            points += parseInt(input.value)
        }
    })

    return points
}

// ---------------------------
// RESULTADO
// ---------------------------
const infoResult = document.getElementById('info-result')
const infoConclusion = document.getElementById('info-conclusion')

function showResult() {
    if (score < 4) {
        infoResult.innerText = 'Normal'
        infoConclusion.innerText = 'Normal'
        return;
    }

    if (score >= 4 && score <= 7) {
        infoResult.innerText = 'Normal'
        infoConclusion.innerText = 'Normal. Pontuação entre 4 e 7. Re-teste opcional'
        return;
    }

    if (score > 7) {
        infoResult.innerText = 'Indicado para frenectomia'
        infoConclusion.innerText = 'Deve ser realizado frenectomia'
        return;
    }

    return infoResult.innerText = ''
}