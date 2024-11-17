export default{
    namespaced: true,
    state:{
        stripedTable: true,
        primaryEditButton: false,
        dangerDeleteButton: false
    },
    getters:{
        editClass(state){
            return state.primaryEditButton ? "btn-primary" : "btn-secondary";
        },
        deleteClass(state){
            return state.dangerDeleteButton ? "btn-primary" : "btn-secondary";
        },
        tableClass(state, payload, roostState){
            console.log(`tableClass`);
            return roostState.products.length > 0 && roostState.products[0].price > 500 ? "table-striped" : "";
        }
    },
    mutations:{
        setEditButtonColor(currentState, primary){
            currentState.primaryEditButton = primary;
        },
        setDeleteButtonColor(currentState, danger){
            currentState.dangerDeleteButton = danger;
        }
    }
}