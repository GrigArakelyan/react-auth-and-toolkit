import { getToken } from "../services/token";

const useAuth = () => {
   const useAuth = getToken();

   return useAuth
}

export default useAuth