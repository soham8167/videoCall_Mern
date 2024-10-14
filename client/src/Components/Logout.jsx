import { useEffect } from 'react';
import { logoutUser } from '../service/api.js';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const res = await logoutUser();
        if (res && res.status === 200) {
          Cookies.remove('token'); // Remove the token from cookies
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logout Successful",
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
              navigate('/'); // Redirect to home or login page
          }, 1500);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Log out fail",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        //   alert("Logout failed");
          console.error("Unexpected response:", res);
        }
      } catch (error) {
        alert("An error occurred while logging out");
        console.error("Logout error:", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default Logout;
