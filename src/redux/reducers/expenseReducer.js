const initialList =()=>{
    const list  = localStorage.getItem('expense-list');
    let expenses =[];
    if(list){
        expenses = JSON.parse(list);
}
return expenses
}

const initialState = {
    expensesList:initialList()
}



const expenseReducer = (state=initialState,{type,payload})=>{
         switch (type) {
            case 'ADD_EXPENSE':
                {
            localStorage.setItem('expense-list',JSON.stringify([...state.expensesList, payload]))

            return{
                ...state,
                expensesList:[
                    ...state.expensesList,
                    payload
                ]
              
            }
        }
            
            
            case 'DELETE_EXPENSE':
                // let newExpenses = state.expenses.filter((elem)=>elem.id !== payload.id)
                const updateList = state.expensesList.filter((elem)=>elem.id !== payload.id );
                localStorage.setItem('expense-list',JSON.stringify(updateList))
                return{
                    ...state,
                    expensesList:updateList
                }
                    
                 default:
                return state
                
         
         }
}
export default expenseReducer