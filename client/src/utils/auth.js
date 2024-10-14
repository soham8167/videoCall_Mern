import Cookies from 'js-cookie';

// export const isLoggedIn = () => {
//   const token = Cookies.get('token');
//   return !!token; // Return true if token exists, otherwise false
// };



export const isLoggedIn = () => {
    const token = Cookies.get('token');
    localStorage.getItem('token');
    return !!token;
  };
  
  export const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.isAdmin;
  };