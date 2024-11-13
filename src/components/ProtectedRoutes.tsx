import { ReactNode, useEffect } from "react";
import useUser from "../pages/Login/useUser";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: Props) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [navigate, isLoading, isAuthenticated]);

  console.log("PROT", isLoading, isAuthenticated);

  if (isLoading) return <Spinner />;
  if (!isLoading) return children;
}
