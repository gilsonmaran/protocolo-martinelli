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