export const register = (newAccount)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore()

        firebase
        .auth()
        .createUserWithEmailAndPassword(newAccount.email, newAccount.password)
        .then(res=>{
            return firestore
            .collection('userAccounts')
            .doc(res.user.uid)
            .set({
                firstName: newAccount.firstName,
                lastName: newAccount.lastName,
                email: newAccount.email,
                password: newAccount.password,
                initials : newAccount.firstName[0] + newAccount.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGN_UP_SUCCESS'})
        }
        )
        .catch(
            err=> dispatch({type:'SIGNUP_FAIL', err})
        )
    }
}
export const login =(email, password)=>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
            ()=>dispatch({type:'LOGIN_SUCCESS'})
        )
        .catch(
            err=>dispatch({type:'LOGIN_FAIL', err})
        )
    }
}
export const logout = ()=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()

        firebase
        .auth()
        .signOut()
        .then(()=>dispatch({type:'LOGOUT_SUCCESS'}))
    }
}

export const authWithGoogle= ()=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        const provider  = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}