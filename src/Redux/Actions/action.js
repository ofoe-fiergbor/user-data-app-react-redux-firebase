
export const addUser = newUser =>{
    return async (dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        try{
            await firestore.collection('users').add({...newUser, timestamp:firestore.FieldValue.serverTimestamp()})
        }catch (e){
            console.log(e)
        }
    }
}

export const getAllUsers = ()=>{
    return async(dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        await firestore
        .collection('users')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>{
            let users = snapshot.docs.map(
                doc=>{
                    return({...doc.data(), id:doc.id})
                }
            )
            dispatch({type:'GET_ALL_USERS', payload: users})
        })
    }
}

export const deleteUser = id =>{
    return async(dispatch, getState, {getFirestore})=>{
        const firestore =  getFirestore()
        try{
            await firestore.collection('users').doc(id).delete()
        }catch (err){
            console.log(err)
        }
    }
}

export const updateUser = user =>{
    return async(dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore()
        try{
            await firestore.collection('users').doc(user.id).update(user)
        }catch(err){
            console.log(err)
        }
    }
}