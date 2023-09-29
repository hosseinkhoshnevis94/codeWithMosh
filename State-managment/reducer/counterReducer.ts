
// interface Action{
//     type:"INCREMENT" | 'RESET'

// }
// const counterReducer = (state:number,action:Action): number =>{
//     if(action.type=="INCREMENT")
//         return state+1
//     if(action.type=='RESET')
//         return 0
//      throw new Error('ERROR')
// }
// export default counterReducer


interface Action{
    type:'INC'|"DEC"|"RESET"
}
const counterReducer = (state:number,action:Action):number =>{
    if(action.type=='INC' && state<10) return state+1
    if(action.type=='DEC' &&state>0) return state-1
    if(action.type=='RESET') return 0
    return state
}
export default counterReducer