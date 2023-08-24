import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Providers/AuthProvier";

const Private = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Private;
