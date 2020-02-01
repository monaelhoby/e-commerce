
export const  types = {
    handleDetails : 'HANDLE_DETAILS'
   }
   
   
   const actions = {
   
    handleDetailsAction : id => ({
           type: types.handleDetails,
           data : 'data'
       })
   }
   
   export default actions 