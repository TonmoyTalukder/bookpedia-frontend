import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider/UserProvider";


const useUser = () => {
    const auth = useContext(UserContext);
    return auth;
}

export default useUser;