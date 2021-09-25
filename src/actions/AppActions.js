export const addCat = (cat) =>{
    return(dispatch, getState, { getFirebase }) =>{
        const firestore = getFirebase().firestore();
        firestore
            .collection("cats")
            .add({
                ...cat,
                date: new Date(),
            })
            .then(()=> {
                dispatch({
                    type:"ADD_CAT",
                    cat,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_CAT_ERR",
                    err,
                });
            });
    };
};