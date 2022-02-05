
export const addTask = (data) =>{
    return {
        type:"ADD_TASK",
        payload:{
            id: new Date().getTime().toString(),
            data:data
            
        }
        
    }
}

export const deleteTask = (id) =>{
    return {
        type: "DELETE_TASK",
        id
    }
}