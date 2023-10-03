const listStudents = [
    {
        name:'Денис',
        lastname:'Нефедов',
        surname:'Юрьевич',
        birthday:new Date(2002, 7, 22),
        faculty:'Экономика',
        start: 2018,
    },
    {
        name:'Илья',
        lastname:'Смыков',
        surname:'Ильясович',
        birthday:new Date(2002, 6, 22),
        faculty:'Экономика',
        start: 2018,
    },
    {
        name:'Саша',
        lastname:'Никифотов',
        surname:'Алексеевич',
        birthday:new Date(2002, 2, 28),
        faculty:'Математика',
        start: 2012,
    },
    {
        name:'Леха',
        lastname:'Никифотов',
        surname:'Алексеевич',
        birthday:new Date(2002, 2, 2),
        faculty:'Математика',
        start: 2012,
    },
]

function formatDate(date) {
    let dd = date.getDate()
    if (dd < 10) dd = '0' + dd
    let mm = date.getMonth()
    if (mm < 10) mm = '0' + mm
    let yy = date.getFullYear()
    if (yy < 10) yy = '0' + yy
    return dd + '.' + mm + '.' + yy
}

function getNewStudent(student) {
    const $tr = document.createElement('tr')
    const $tdFIO = document.createElement('td')
    const $tdBirth = document.createElement('td')
    const $tdFac = document.createElement('td')
    const $tdStart = document.createElement('td')

    $tdFIO.textContent = student.name + ' ' + student.surname +  ' ' + student.lastname
    $tdBirth.textContent =  formatDate(student.birthday)
    $tdFac.textContent = student.faculty
    $tdStart.textContent = student.start

    $tr.append($tdFIO, $tdBirth, $tdFac, $tdStart) 
    return $tr
}
function render(array) {
    // let copyArr = [...array]

    const $studTable = document.getElementById('stud-table')

    $studTable.innerHTML = ''
        for (const student of array) {
            const $newTr = getNewStudent(student)
            $studTable.append($newTr)
        }

}
render(listStudents)
const $form = document.getElementById('add-form')
const nameInp = document.getElementById('name-inp')
const lastnameInp = document.getElementById('lastname-inp')
const sernameInp = document.getElementById('sername-inp')
const birthInp = document.getElementById('birth-inp')
const fackInp = document.getElementById('fack-inp')
const dataInp = document.getElementById('data-inp')
const labelName = document.querySelector('.label-name')
const labellastName = document.querySelector('.label-lastname')
const labelSerName = document.querySelector('.label-sername')
$form.addEventListener('submit', function(event) {
    event.preventDefault()
    let newSt = {
        name:nameInp.value,
        lastname:lastnameInp.value,
        surname:sernameInp.value,
        birthday:new Date(birthInp.value),
        faculty:fackInp.value,
        start: dataInp.value,
    }
    listStudents.push(newSt)
    console.log(listStudents);
    if (nameInp.value === ''){
        labelName.classList.remove('none')
        
    }
    if (lastnameInp.value === ''){
        labellastName.classList.remove('none')
        
    }
    if (sernameInp.value === ''){
        labelSerName.classList.remove('none')
        
    }
    render(listStudents)
})

