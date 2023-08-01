import { getToken } from "../services/token";

const useAuth = () => {
   const useAuth:string | null = getToken();

   return useAuth
}

export default useAuth