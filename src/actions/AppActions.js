export const addCat = (cat) =>{
    return(dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection("cats")
            .add({
                ...cat,
                authorId: authorId,
                date: new Date(),
            })
            .then(()=> {
                console.log("Then it was done");
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

export const removeCat = (cat) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("cats")
        .doc(cat.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_CAT",
          });
          console.log("the cat id", cat.id)
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_CATT_ERR",
            err,
          });
        });
    };
  };

  export const toggleChecked = (cat) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
  
      firestore
        .collection("cats")
        .doc(cat.id)
        .set(
          {
            ...cat,
            checked: !cat.checked,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "TOGGLE_CHECKED",
            cat,
          });
        })
        .catch((err) => {
          dispatch({
            type: "TOGGLE_CHECKED_ERR",
            err,
          });
        });
    };
  };