import logInFireBase from '../firebase'
import { AsyncStorage } from 'react-native';
// import { AsyncStorage } from 'react-native';
// const uid = AsyncStorage.getItem(uid);

export function newUser(firstname, lastname, emailid, passworditem) {
    //console.log("writedata1");
    logInFireBase.auth().createUserWithEmailAndPassword(emailid, passworditem).then((success) => {
        logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').set({
            firstName: firstname,
            lastName: lastname,
            emailId: emailid
        })
    })
        .catch((error) => {
        });
}

export default toDashboard = (emailid, password) => {
    logInFireBase.auth().signInWithEmailAndPassword(emailid, password).then(async (success) => {
        await logInFireBase.database().ref('/users/' + success.user.uid + '/personalData/').once('value', (snapshot) => {
            let snapObj = snapshot.val();

            AsyncStorage.setItem('FirstLetter', (snapObj.firstname).charAt(0))
            AsyncStorage.setItem('FirstName', snapObj.firstname)
            AsyncStorage.setItem('LastName', snapObj.lastname)
            AsyncStorage.setItem('EmailId', snapObj.emailid)
            AsyncStorage.setItem('uId', success.user.uid)
            console.log('sihn in : ' + AsyncStorage.getItem('uId'));
            AsyncStorage.setItem("isAuth", true)

        })

    })
        .catch(function (error) {
        });
}