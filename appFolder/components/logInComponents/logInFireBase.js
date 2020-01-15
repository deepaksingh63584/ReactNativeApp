import logInFireBase from '../firebase'


export function resisterUser(firstname, lastname, emailid, passworditem) {
    logInFireBase.auth().createUserWithEmailAndPassword(emailid, passworditem).then((success) => {
        logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').set({
            firstName: firstname,
            lastName: lastname,
            emailId: emailid
        })
    })

}

export function toDashboard(emailid, password, thencallback, catchcallback) {
    logInFireBase.auth().signInWithEmailAndPassword(emailid, password).then((success) => {
        // await logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').once('value', async (snapshot) => {
        //     let snapObj = snapshot.val();
        // })
        thencallback()

    })
        .catch((error) => {
            let errors = {}
            console.warn(error.code);
            console.warn(error.message)
            if (error.code === 'auth/user-not-found') {
                errors["emailId"] = 'This account is not sign Up with Fundoo'
            }
            else {
                errors["password"] = 'Invalid Password, try again'
            }
            catchcallback(errors)
        });
}

export function forgatePassword(emailid, thencallback, catchcallback) {
    let errors = {};
    logInFireBase.auth().sendPasswordResetEmail(emailid).then(() => {
        alert("Congratulation ! \n Your password has reset and new password send to the your Email-id");
        thencallback()
    })
        .catch((error) => {
            console.warn(error.code);
            console.warn(error.message)
            if (error.code === 'auth/user-not-found') {
                errors["emailId"] = 'This account is not sign Up with Fundoo'
            }
            catchcallback(errors)
        });
}