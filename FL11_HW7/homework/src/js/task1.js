const email = prompt('Enter email');
const user1 = {
    login: 'user@gmail.com',
    password: 'UserPass'
};
const user2 = {
    login: 'admin@gmail.com',
    password: 'AdminPass'
};
const minEmailLength = 6;
const minPassLength = 5;
if (email === null || email.length <= 0) {
    alert('Canceled.')
} else if (email.length < minEmailLength) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (email !== user1.login && email !== user2.login) {
    alert('I don’t know you');
} else {
    const trueEmail = prompt('Enter password');
    if (trueEmail === null || trueEmail.length <= 0) {
        alert('Canceled.');
    } else if (trueEmail !== user1.password && trueEmail !== user2.password) {
        alert('Wrong password');
    } else {
        const passwordChange = confirm('Do you want to change your password?');
        if (!passwordChange) {
            alert('You have failed the change.');
        } else {
            const validatePass = prompt('Enter old password ');
            if (validatePass === null || validatePass.length <= 0) {
                alert('Canceled.');
            } else if (validatePass !== user1.password && validatePass !== user2.password) {
                alert('Wrong old password');
            } else {
                const newPass = prompt('Enter new password');
                if (newPass === null || newPass.length <= 0) {
                    alert('Canceled.');
                } else if (newPass.length < minPassLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    const checkNewPass = prompt('Enter new password again')
                    if (checkNewPass === null || checkNewPass.length <= 0 ) {
                        alert('Canceled.');
                    } else if (checkNewPass !== newPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            }
        }
    }
}


