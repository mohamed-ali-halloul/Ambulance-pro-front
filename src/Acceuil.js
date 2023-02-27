import { useHistory } from "react-router-dom";


import SignIn from "./signin";

const Acceuil = () => {
  const history = useHistory();


  return (
    <>
      {" "}
      <div className="acc">
     
    
          <div className="d1">
            <h1 className="titre">Welcome to Ambulance PRO</h1>
            <SignIn />
           
          </div>
        </div>
    </>
  );
};
export default Acceuil;
