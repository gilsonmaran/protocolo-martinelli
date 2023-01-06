// CALCULAR IDADE


const dateBirth = document.getElementById('date-birth')
const dateExam = document.getElementById('date-exam')
const age = document.getElementById('age')

dateBirth.addEventListener('change', () => {
    calculateAge(dateExam.value, age);
});

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
