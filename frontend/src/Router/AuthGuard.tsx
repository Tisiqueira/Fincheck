import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate} :AuthGuardProps) {
  const signedIn = false;

  if(!signedIn && isPrivate){
    //rederecionar para /login
    return <Navigate to="/login" replace />
  }

  if(signedIn && !isPrivate){
    // redirecionar para o / (dashboard)
    return <Navigate to="/" replace />

  }
  return <Outlet />
}