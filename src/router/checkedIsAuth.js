import { redirect } from "react-router-dom"

const checkedIsAuth=async ()=>{
   const isAuth=JSON.parse(localStorage.getItem('user'))?.isAuthenticated
if(!isAuth){
   
  return redirect('/login')

}
return null
}
export default checkedIsAuth