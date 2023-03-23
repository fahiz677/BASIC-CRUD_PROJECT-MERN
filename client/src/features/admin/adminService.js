import axios from "axios";

const url = 'http://localhost:4000/admin/userslist';

export const fetchUsersList = async() => {
 const  { data }=  await axios.get(url);
 return data;
}

const prductsService = {
    fetchUsersList
  }


export default prductsService;