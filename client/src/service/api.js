import axios from 'axios';
const URL = "https://meetup-server.vercel.app"; 

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup`, data);
    return response;
  } catch (error) {
    console.log("While connecting the API", error);
    return error.response;  // Return the error response if the request fails
  }
}

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    const { token, user } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    return response;
  } catch (error) {
    console.log("While connecting the API", error);
    return error.response;  // Return the error response if the request fails
  }
}
// export const loginAdmin = async (data) => {
//   try {
//     const response = await axios.post(`${URL}/loginadmin`, data);
//     return response;
//   } catch (error) {
//     console.log("While connecting the API", error);
//     return error.response;  // Return the error response if the request fails
//   }
// }

export const loginAdmin = async (data) => {
    try {
      const response = await axios.post(`${URL}/loginadmin`, data);
      const { token, user } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      return response;
    } catch (error) {
      console.log("While connecting the API", error);
      return error.response; // Return the error response if the request fails
    }
  };
  




export const logoutUser = async () => {
    try {
      const response = await axios.post(`${URL}/logout`);
      return response;
    } catch (error) {
      console.log("While connecting the API", error);
      return error.response;  // Return the error response if the request fails
    }
  }

  export const Messages = async (data) => {
    try {
      const response = await axios.post(`${URL}/message`, data);
      return response;
    } catch (error) {
      console.log("While connecting the API", error);
      return error.response;  // Return the error response if the request fails
    }
  }
 
// export const getUser = async (roll) => {
//   try {
//     const response = await fetch(`${URL}/user/${roll}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       // Handle HTTP errors
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log("While connecting the API ", error);
//     return { error: error.message };  // Return the error message if the request fails
//   }
// }


