function toggleAuth(type) {
        const loginForm = document.getElementById('form-login');
        const signupForm = document.getElementById('form-signup');
        const authBg = document.getElementById('auth-bg');
        const tabLogin = document.getElementById('tab-login');
        const tabSignup = document.getElementById('tab-signup');

        if (type === 'login') {
            loginForm.classList.remove('d-none');
            signupForm.classList.add('d-none');
            authBg.style.left = '5px';
            tabLogin.classList.add('active');
            tabSignup.classList.remove('active');
        } else {
            loginForm.classList.add('d-none');
            signupForm.classList.remove('d-none');
            authBg.style.left = 'calc(50% - 5px)';
            tabLogin.classList.remove('active');
            tabSignup.classList.add('active');
        }
    }