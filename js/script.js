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

    const dn = moment(dateBirth.value)
    const dc = moment(dataConsulta).add(1, 'days')

    const idadeReal = dc.diff(dn, 'years', true)

    const anos = dc.diff(dn, 'years')
    const meses = parseInt((idadeReal - anos) * 12)

    alvo.value = `${anos}a ${meses}m`
}

// ---------------------------
// ADICIONAR AS IMAGENS
// ---------------------------
const images = [
    'img-1',
    'img-2',
    'img-3',
    'img-4',
];

images.forEach(image => {
    const element = document.getElementById(image)

    element.addEventListener('change', () => {
        const id = image.split('-')[1]
        const target = document.getElementById(`exam-${id}`)
        const file = element.files[0];

        if (file)
            target.src = URL.createObjectURL(file);
    })
})

// ---------------------------
// CALCULAR SCORE
// ---------------------------
let score = 0
const result = document.getElementById('result')
const inputs = [...document.querySelectorAll('input[type="radio"]')]

inputs.forEach(e => {
    e.addEventListener('click', () => {
        score = 0

        inputs.forEach(input => {
            if (input.checked)
                score += parseInt(input.value)
        })

        showResult()

        result.innerText = score === 1
            ? `${score} ponto`
            : `${score} pontos`
    })
})

// ---------------------------
// RESULTADO
// ---------------------------
resetResults()

function resetResults() {
    const results = ['result1', 'result2', 'result3']
    results.forEach(r => {
        document.getElementById(r).style.display = 'none'
        document.getElementById(r).style.display = 'none'
        document.getElementById(r).style.display = 'none'
    })
}

function showResult() {
    resetResults()

    if (score <= 3) {
        document.getElementById('result1').style.display = 'block';
        return;
    }

    if (score <= 7) {
        document.getElementById('result2').style.display = 'block';
        return;
    }

    if (score < 99) {
        document.getElementById('result3').style.display = 'block';
        return;
    }

}