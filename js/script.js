// ---------------------------
// CALCULAR IDADE
// ---------------------------
const dateBirth = document.getElementById('date-birth')
const dateExam = document.getElementById('date-exam')
const age = document.getElementById('age')

dateBirth.addEventListener('change', () => {
    calculateAge(dateExam.value, age);
});

dateExam.value = moment().format('YYYY-MM-DD')
dateExam.addEventListener('change', () => {
    calculateAge(dateExam.value, age);
});

function calculateAge(dataConsulta, alvo) {
    if (dateBirth.value == '' || dataConsulta == '')
        return

    const _dateBirth = moment(dateBirth.value)
    const _dateConsult = moment(dataConsulta).add(0, 'days')
    const years = _dateConsult.diff(_dateBirth, 'years')

    if (years < 1) {
        const _ageInMonths = _dateConsult.diff(_dateBirth, 'months', true)
        const _months = parseInt(_ageInMonths)

        let _days = (_ageInMonths - _months) * 30
        _days = Math.round(_days)

        return alvo.value = `${_months}m ${_days}d`
    }

    if (years >= 1) {
        const _ageInMonths = _dateConsult.diff(_dateBirth, 'months', true)
        const _months = _ageInMonths - (years * 12)

        return alvo.value = `${years}a ${_months}m`
    }

    alvo.value = 'Não Calculado'
}

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

        infoScore.innerText = score === 1
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
    if (score <= 7) {
        infoResult.innerText = 'Normal'
        infoConclusion.innerText = 'Normal. Se pontuação estiver entre 4 e 7, o re-teste é opcional.'
        return;
    }

    if (score > 7) {
        infoResult.innerText = 'Indicado para frenectomia'
        infoConclusion.innerText = 'Deve ser realizado frenectomia'
        return;
    }

    return infoResult.innerText = ''
}