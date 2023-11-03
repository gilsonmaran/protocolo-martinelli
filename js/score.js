// ---------------------------
// CALCULAR SCORE
// ---------------------------
const infoScore = document.getElementById('info-score')
const infoResult = document.getElementById('info-result')
const infoConclusion = document.getElementById('info-conclusion')

const inputs = [...document.querySelectorAll('input[type="radio"]')]

inputs.forEach(e => {
    e.addEventListener('click', () => {
        const score = calculateScore()
        displayResult(score)

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
function displayResult(score) {
    infoResult.innerText = displayInfoResult(score)
    infoConclusion.innerText = displayinfoConclusion(score)
}

function displayInfoResult(score) {
    if (score == null || isNaN(score) || score == undefined)
        return ''

    score < 0 ? 0 : score

    return score <= 7
        ? 'Normal'
        : 'Indicado para frenectomia'
}

function displayinfoConclusion(score) {
    if (score == null || isNaN(score) || score == undefined)
        return ''

    score < 0 ? 0 : score

    if (score <= 3)
        return 'Normal'

    if (score >= 4 && score <= 7)
        return 'Normal. Pontuação entre 4 e 7. Re-teste opcional'

    if (score > 7)
        return 'Deve ser realizado frenectomia'

    return ''
}