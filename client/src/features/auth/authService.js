import axios from 'axios';

//  Auth user

const URL = 'http://localhost:5000/user';

const signin = async (userData) => {
        const response = await axios.post(`${URL}/signin`, userData);

        if (response.data) localStorage.setItem('user', JSON.stringify(response.data))
         
        return response.data  
  }

  const signUp = async (userData) => {

        const response = await axios.post(`${URL}/signup`, userData);
        if (response.data) localStorage.setItem('user', JSON.stringify(response.data))

        return response.data
    
  
  }


  // Logout user
const logout = () => {
    localStorage.removeItem('user')
  }



  const authService = {
   signin,
   signUp,
   logout,
  }
  
  export default authService