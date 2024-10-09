import customAxios from "../middlewares/axios-interceptor"

const fetchCategories = () =>{
   return customAxios.get('/enterprises/categories')
}

export {fetchCategories}