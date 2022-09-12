export const addExp = (data)=>{
return{
    type:'ADD_EXPENSE',
    payload:data
}
}

export const deleteExp = (data)=>{
    return{
        type:'DELETE_EXPENSE',
        payload:data
    }
}
