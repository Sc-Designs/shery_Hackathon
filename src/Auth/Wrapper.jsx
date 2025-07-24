import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Wrapper = () => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setChecking(false);
    }
  }, [navigate]);

  if (checking) return null;

  return <Outlet />;
};

export default Wrapper;
