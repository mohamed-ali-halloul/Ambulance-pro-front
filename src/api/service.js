import http from "./signin";

const login = (data)=> {
    
return http.post("/connexion",data);}
const UserService ={
    login
    
};
export default UserService;