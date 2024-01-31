const showPassword = document.querySelector(
	'.main_input_container__form_input--show_password'
);
const hidePassword = document.querySelector(
	'.main_input_container__form_input--hide_password'
);
const passwordInput = document.querySelector('.password_input');
const emailInput = document.querySelector('.email_input');
const loginBtn = document.querySelector(
	'.main_input_container__form_button--login'
);

let hidenPassword = true;

const showIcon = () => {
	if (passwordInput.value.length === 0) {
		if (!showPassword.classList.contains('hide-icon')) {
			showPassword.classList.add('hide-icon');
			hidenPassword = false;
		}
		if (!hidePassword.classList.contains('hide-icon')) {
			hidePassword.classList.add('hide-icon');
			hidenPassword = true;
		}
	} else if (passwordInput.value.length === 1) {
		if (!hidenPassword) {
			showPassword.classList.remove('hide-icon');
			hidenPassword = false;
		} else {
			hidePassword.classList.remove('hide-icon');
			hidenPassword = true;
		}
	}
};

const changeInputType = () => {
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		hidenPassword = false;
	} else {
		passwordInput.type = 'password';
		hidenPassword = true;
	}
};

const changeIcon = () => {
	hidePassword.classList.toggle('hide-icon');
	showPassword.classList.toggle('hide-icon');
};

const sendToMainPage = () => {
    if(emailInput.value === 'szymusk0212@gmail.com' && passwordInput.value === 'Szymon2005') {
	window.location.href = '../facebook.html';
    } else {
        //popup
    }
};

hidePassword.addEventListener('click', changeIcon);
showPassword.addEventListener('click', changeIcon);
showPassword.addEventListener('click', changeInputType);
hidePassword.addEventListener('click', changeInputType);
passwordInput.addEventListener('input', showIcon);
loginBtn.addEventListener('click', sendToMainPage);
