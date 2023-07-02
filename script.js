let name = document.querySelector('.input-name');
let labelName = document.querySelector('.label-name');
let email = document.querySelectorAll('.input-email');
let labelEmail = document.querySelectorAll('.label-email');
let password = document.querySelectorAll('.input-password');
let labelPassword = document.querySelectorAll('.label-password');
let loginButton = document.querySelector('.btnLogin');
let registerButton = document.querySelector('.btnRegister');
let logoutButton = document.querySelector('.logout');
let showRegister = document.querySelector('.register-link');
let showLogin = document.querySelector('.login-link');
let alertCheckbox = document.querySelector('.alert-checkbox');
let alertButton = document.querySelectorAll('.alert-button');
let alertName = document.querySelector('.alert-name');
let alertEmail = document.querySelectorAll('.alert-email');
let alertPassword = document.querySelectorAll('.alert-password');
let alertRegister = document.querySelector('.successRegister');
let formLogin = document.querySelector('.form-login');
let formRegister = document.querySelector('.form-register');
let pageRegister = document.querySelector('.register');
let pageLogin = document.querySelector('.login');
let pageSignIn = document.querySelector('.sign-in');
let nameUser = document.querySelector('.nameUser');
let iAgree = document.querySelector('.iAgree');

/// Usuário cadastrado
let users = [{}];

document.addEventListener('click', () => {
    // Retrair o texto do nome
    if (name === document.activeElement || name.value.length > 0) {
        labelName.classList.add('retract-text');
        // Se clicar 'TAB' no elemento nome ativo
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                email[1].activeElement;
                labelEmail[1].classList.add('retract-text');
                labelPassword[1].classList.remove('retract-text');
                if (name.value === '') {
                    labelName.classList.remove('retract-text');
                }
            }
        })
    } 
    if (name !== document.activeElement && name.value === ''){
        labelName.classList.remove('retract-text');
        name.style.borderBottom = '1px solid #f9f9f9';
    }
    // Retrair o texto do email
    if (email[0] === document.activeElement || email[0].value.length > 0 || email[1] === document.activeElement || email[1].value.length > 0) {
        labelEmail[0].classList.add('retract-text');
        labelEmail[1].classList.add('retract-text'); 
        // Se clicar 'TAB' no elemento email ativo
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                password[0].activeElement;
                labelPassword[0].classList.add('retract-text');
                password[1].activeElement;
                labelPassword[1].classList.add('retract-text');
                if (email[0].value === '') {
                    labelEmail[0].classList.remove('retract-text');
                }
                if (email[1].value === '') {
                    labelEmail[1].classList.remove('retract-text');
                }
            }
        })
    } 
    if (email[0] !== document.activeElement && email[0].value === ''){
        labelEmail[0].classList.remove('retract-text');
        email[0].style.borderBottom = '1px solid #f9f9f9';
    }
    if (email[1] !== document.activeElement && email[1].value === ''){
        labelEmail[1].classList.remove('retract-text');
        email[1].style.borderBottom = '1px solid #f9f9f9';
    }
    // Retrair o texto da senha
    if (password[0] == document.activeElement || password[0].value.length > 0 || password[1] == document.activeElement || password[1].value.length > 0) {
        labelPassword[0].classList.add('retract-text');
        labelPassword[1].classList.add('retract-text');
        // Se clicar 'TAB' no elemento senha ativo
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab' && password[0].value === '') {
                labelPassword[0].classList.remove('retract-text');
            }
            if (event.key === 'Tab' && password[1].value === '') {
                labelPassword[1].classList.remove('retract-text');
            }
        })
    }
    if (password[0] !== document.activeElement && password[0].value === ''){
        labelPassword[0].classList.remove('retract-text');
    }
    if (password[1] !== document.activeElement && password[1].value === ''){
        labelPassword[1].classList.remove('retract-text');
    }
})

// Nome está sendo aceito ou não
name.oninput = () => {
    if (name.value === '') {
        name.style.borderBottom = '1px solid #f9f9f9';
        alertName.style.transform = 'scale(0)';
    } else {
        if (isNameValid(name.value)) {
            name.style.borderBottom = '1px solid #36c136';
            alertName.style.transform = 'scale(0)';
        } else {
            name.style.borderBottom = '1px solid #e52828';
            alertName.style.transform = 'scale(1)';
        }
    }
}

// Email está sendo aceito ou não
email[0].oninput = () => {
    if (email[0].value === '') {
        email[0].style.borderBottom = '1px solid #f9f9f9';
        alertEmail[0].style.transform = 'scale(0)';
    } else {
        if (isEmailValid(email[0].value)) {
            email[0].style.borderBottom = '1px solid #36c136';
            alertEmail[0].style.transform = 'scale(0)';
        } else {
            email[0].style.borderBottom = '1px solid #e52828';
            alertEmail[0].style.transform = 'scale(1)';
        }
    }
}
email[1].oninput = () => {
    if (email[1].value === '') {
        email[1].style.borderBottom = '1px solid #f9f9f9';
        alertEmail[1].style.transform = 'scale(0)';
    } else {
        if (isEmailValid(email[1].value)) {
            email[1].style.borderBottom = '1px solid #36c136';
            alertEmail[1].style.transform = 'scale(0)';
        } else {
            email[1].style.borderBottom = '1px solid #e52828';
            alertEmail[1].style.transform = 'scale(1)';
        }
    }
}

// Senha está sendo aceita ou não
password[0].oninput = () => {
    if (password[0].value === '') {
        password[0].style.borderBottom = '1px solid #f9f9f9';
        alertPassword[0].style.transform = 'scale(0)';
    } else {
        if (password[0].value.length >= 8) {
            password[0].style.borderBottom = '1px solid #36c136';
            alertPassword[0].style.transform = 'scale(0)';
        } else {
            password[0].style.borderBottom = '1px solid #e52828';
            alertPassword[0].textContent = `The password must contain at least 8 digits.`
            alertPassword[0].style.transform = 'scale(1)';
        }
    }
}
password[1].oninput = () => {
    if (password[1].value === '') {
        password[1].style.borderBottom = '1px solid #f9f9f9';
        alertPassword[1].style.transform = 'scale(0)';
    } else {
        if (password[1].value.length >= 8) {
            password[1].style.borderBottom = '1px solid #36c136';
            alertPassword[1].style.transform = 'scale(0)';
        } else {
            password[1].style.borderBottom = '1px solid #e52828';
            alertPassword[1].style.transform = 'scale(1)';
        }
    }
}

// Verifica se o email é válido
function isEmailValid(email) {
    let emailRegExp = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/
    )
    if (emailRegExp.test(email) === true) {
        return true;
    }
    return false;
}

// Verifica se a senha é válida
function isPasswordValid(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
}

// Verifica se o nome é válido
function isNameValid(name) {
    let nameRegex = new RegExp (
        /^[a-zA-ZáÁéÉíÍóÓúÚ ]{3,}$/
    )
    if (nameRegex.test(name) === true) {
        return true;
    }
    return false;
}

//Verifica se aceitou os termos para Registrar
function acceptedTerms() {
    return (iAgree.checked);
}

loginButton.addEventListener('click', () => {
    // Verificar se o array contém o email e a senha
    if (isEmailValid(email[0].value) && isPasswordValid(password[0].value)) {
        let notEmail = true;
        alertButton[0].style.transform = 'scale(0)'; 
        for (let cont = 0; cont < users.length; cont++) {
            if (users[cont].email === email[0].value) {
                notEmail = false;
                if (users[cont].password === password[0].value) {
                    nameUser.textContent = `${users[cont].name}`;
                     formLogin.style.transform = 'scale(0)';
                     setTimeout(() => {
                         pageLogin.style.display = 'none';
                    }, 1000)
                     setTimeout(() => {
                         pageSignIn.style.transform = 'scale(1)';
                    }, 1000)
                    break
                } else {
                    password[0].value = '';
                    password[0].focus();
                    password[0].style.borderBottom = '1px solid #e52828';
                    alertPassword[0].style.transform = 'scale(1)';
                    alertPassword[0].textContent = `The password was entered incorrectly.`
                }
            } else {
                notEmail = true;
            }
        }
        if (notEmail === true) {
            email[0].style.borderBottom = '1px solid #e52828';
                password[0].style.borderBottom = '1px solid #f9f9f9';
                password[0].value = '';
                alertEmail[0].style.transform = 'scale(1)';
                alertEmail[0].textContent = `This email does not exist, register now.`;
        }
    } else {
        alertButton[0].style.transform = 'scale(1)';
    }   
})

showRegister.addEventListener('click', () => {

    formLogin.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        pageLogin.style.display = 'none';
    }, 500)
    pageRegister.style.display = 'flex';
    setTimeout(() => {
        formRegister.style.transform = 'rotateY(0)';
    }, 10)
    email[0].value = '';
    alertEmail[0].style.transform = 'scale(0)';
    password[0].value = '';
    password[0].style.borderBottom = '1px solid #f9f9f9';
    alertPassword[0].style.transform = 'scale(0)';
    alertButton[0].style.transform = 'scale(0)';

})

registerButton.addEventListener('click', () => {
    // Verificar se o array contém o email
    if (isNameValid(name.value) && isEmailValid(email[1].value) && isPasswordValid(password[1].value)) {
        if (acceptedTerms()) {
            alertCheckbox.style.display = 'none';
            alertCheckbox.style.transform = 'scale(0)';
            alertButton[1].style.transform = 'scale(0)';
            let newUser = {};
            let existEmail = true;
            for (let cont = 0; cont < users.length; cont++) {
                if (users[cont].email === email[1].value) {
                    existEmail = true;
                    email[1].focus();
                    email[1].style.borderBottom = '1px solid #e52828';
                    alertEmail[1].textContent = `This email has already been registered.`
                    alertEmail[1].style.transform = 'scale(1)';
                    password[1].value = '';
                    password[1].style.borderBottom = '1px solid #f9f9f9';
                } else {
                    existEmail = false;
                }
            }
            if (!existEmail) {
                newUser = {
                        name: name.value,
                        email: email[1].value,
                        password: password[1].value
                }
                users.push(newUser);
                alertRegister.style.display = 'flex';
                setTimeout(() => {
                    alertRegister.style.transform = 'translateY(-3px)';
                }, 0)
                setTimeout(() => {
                    alertRegister.style.transform = 'translateY(-35px)';
                }, 4500)
                setTimeout(() => {
                    alertRegister.style.display = 'none';
                }, 5500)
            }
        } else {
            alertCheckbox.style.display = 'block';
            alertCheckbox.style.transform = 'scale(1)';
        }
    } else {
        alertButton[1].style.transform = 'scale(1)';
    }
})

showLogin.addEventListener('click', () => {

    formRegister.style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        pageRegister.style.display = 'none';
    }, 500)
    pageLogin.style.display = 'flex';
    setTimeout(() => {
        formLogin.style.transform = 'rotateY(0)';
    }, 10)
    name.value = '';
    alertName.style.transform = 'scale(0)';
    name.style.borderBottom = '1px solid #f9f9f9';
    email[1].value = '';
    alertEmail[1].style.transform = 'scale(0)';
    password[1].value = '';
    password[1].style.borderBottom = '1px solid #f9f9f9';
    alertPassword[1].style.transform = 'scale(0)';
    alertButton[1].style.transform = 'scale(0)';

})

// Fazer Logout
logoutButton.addEventListener('click', () => {
    pageSignIn.style.transform = 'scale(0)';
    setTimeout(() => {    
        pageLogin.style.display = 'flex';
        formLogin.style.transform = 'scale(1)';
        password[0].value = '';
        password[0].style.borderBottom = '1px solid #f9f9f9';
    }, 500)
})
