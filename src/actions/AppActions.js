export const addCat = (cat) =>{
    return(dispatch, getState, {getFirebase}) =>{
        const firestore = getFirebase().firestore();
        firestore
            .collection("cats")
            .add({
                ...cat,
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