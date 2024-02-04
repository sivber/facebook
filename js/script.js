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

const createAccountContainer = document.querySelector(
	'.create_account_container'
);
const createAccountButton = document.querySelector(
	'.main_input_container__form_button--create_account'
);

const createAccount = document.querySelector('.create_account');

const createAccountEmailInput = document.querySelector(
	'.create_account_email_input'
);

const createAccountConfirmEmailInput = document.querySelector(
	'.create_account_email_input_confirm'
);

const closeFormContainerButton = document.querySelector(
	'.create_account_container__close_window'
);

const customSettingsInput = document.querySelector(
	'.create_account_container__form--custom_settings'
);

const customSettingsContainer = document.querySelector(
	'.create_account_container__form--custom_settings_container'
);

let hidenPassword = true;

const showIcon = () => {
	if (passwordInput.value.length === 0) {
		if (!showPassword.classList.contains('hide-item')) {
			showPassword.classList.add('hide-item');
			hidenPassword = false;
		}
		if (!hidePassword.classList.contains('hide-item')) {
			hidePassword.classList.add('hide-item');
			hidenPassword = true;
		}
	} else if (passwordInput.value.length === 1) {
		if (!hidenPassword) {
			showPassword.classList.remove('hide-item');
			hidenPassword = false;
		} else {
			hidePassword.classList.remove('hide-item');
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
	hidePassword.classList.toggle('hide-item');
	showPassword.classList.toggle('hide-item');
};

const sendToMainPage = () => {
	if (
		emailInput.value === 'szymusk0212@gmail.com' &&
		passwordInput.value === 'Szymon2005'
	) {
		window.location.href = '../facebook.html';
	} else {
		//popup
	}
};

const showFormToCreateAccount = () => {
	createAccountContainer.classList.toggle('hide-item');
	createAccount.classList.toggle('darkened_background');
};

const hideFormToCreateAccount = () => {
	createAccountContainer.classList.toggle('hide-item');
	createAccount.classList.toggle('darkened_background');
};

function checkEmail() {
	var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (regex.test(createAccountEmailInput.value)) {
		if (createAccountConfirmEmailInput.classList.contains('hide-item')) {
			createAccountConfirmEmailInput.classList.remove('hide-item');
		}
	} else {
		createAccountConfirmEmailInput.classList.add('hide-item');
	}
}

const showGenderCustomSettings = () => {
	if (customSettingsInput.checked) {
		customSettingsContainer.classList.toggle('hide-item');
	} else {
		customSettingsContainer.classList.toggle('hide-item');
	}
};

hidePassword.addEventListener('click', changeIcon);
showPassword.addEventListener('click', changeIcon);
showPassword.addEventListener('click', changeInputType);
hidePassword.addEventListener('click', changeInputType);
passwordInput.addEventListener('input', showIcon);
loginBtn.addEventListener('click', sendToMainPage);
createAccountButton.addEventListener('click', showFormToCreateAccount);
createAccountEmailInput.addEventListener('input', checkEmail);
closeFormContainerButton.addEventListener('click', hideFormToCreateAccount);
customSettingsInput.addEventListener('change', showGenderCustomSettings);
