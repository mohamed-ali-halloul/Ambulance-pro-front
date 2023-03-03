import { useHistory } from "react-router-dom";
import logos from "./layout/img5.jpg"
import { Image } from "antd";
import SignIn from "./signin";
import "./Acceuil.css";
const Acceuil = () => {
  const history = useHistory();


  return (
    <>
      {" "}
      <div className="acc">
        <div className="img1">
      <Image src={logos} width={300} preview={false} />
  </div>  
               
            <SignIn />
           
  

        </div>
    </>
  );
};
export default Acceuil;
