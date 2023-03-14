let button = document.querySelector('#button');
let celcius = document.querySelector('#celcius').value.toUpperCase().includes('F');
let fahrenheit = document.querySelector('#fahrenheit').value.toUpperCase().includes('C'); 
// Fazendo uma function para converter fahrenhei em celsius
function calculateCelsius() {  
    let celcius = document.querySelector('#celcius').value.toUpperCase().includes('F');
    let fahrenheit = document.querySelector('#fahrenheit').value.toUpperCase().includes('C');
    // Criando variáveis com as fórmulas
    if (celcius === true) {
        let formulaC = (fahrenheit - 32) * 5/9       
        // let newDiv = document.createElement('div');
        let text = document.createTextNode(`${formulaC.toFixed(2)}C`);      
        let divOld = document.querySelector('#append_c');
        // divOld.appendChild(text)
        divOld.appendChild(text);
        
        // Verificando se não é o valor correto digitado
        if (!celcius != 'C'  && !fahrenheit != 'F  ') {
            alert('Esse caractere não existe');
        };
    };
};

function calculateFah() {
    let celcius = document.querySelector('#celcius').value.toUpperCase().includes('F');
    let fahrenheit = document.querySelector('#fahrenheit').value.toUpperCase().includes('C');
    // Criando variáveis com as fóormulas
    if (fahrenheit === true) {
        let formulaF = (celcius * 9/5) +32
        let text2 = document.createTextNode(`${formulaF.toFixed(2)}F`);
        let divOdl2 = document.querySelector('#append_f')
        divOdl2.appendChild(text2)
    };
};

// Adicionando eventos no notão e recebendo valor de input
button.addEventListener('click', event => {     
    let celcius = document.querySelector('#celcius').value.toUpperCase().includes('F');
    let fahrenheit = document.querySelector('#fahrenheit').value.toUpperCase().includes('C');
    calculateCelsius();
    calculateFah();
      
});






// ------------------------------------------------------------------------------------------------------------
// Implemetando o modo dark no site
const changeThemeBtn = document.querySelector('#change-theme');

function toggleDarkMode() {
    document.body.classList.toggle('dark')
};
// load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem('dark')
    if (darkMode) {
        toggleDarkMode;
    };
};
loadTheme();

changeThemeBtn.addEventListener('change', () => {
    toggleDarkMode()
    // Save or remove dark mode
    localStorage.removeItem('dark');

    if (document.body.contains('dark')) {
        localStorage.setItem('dark', 1);
    };
});
