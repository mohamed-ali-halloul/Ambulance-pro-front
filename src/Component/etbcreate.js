import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Input, Button, Form, Select,InputNumber,DatePicker, Space  } from "antd";

import "./OperateurCreate.css";
const AddEtablist = () => {
  // const navigate = useNavigate();
  //const boxe = useSelector((state) => state.boxe);
  const dispatch = useDispatch();
  const [cabines, setCabines] = useState([]);
  const [sizes,setSizes]=useState([]);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [transport, setTransport] = useState({
    nom: "",
    tel:"",
    email:"",
    adresse :"",
    typeEtb:"",
  });
/*  function onChangecabine(value) 
  {
    setBox({ ...box, idcabine: value });
  }
  function onChangesize(value) {
    setBox({ ...box, idsize: value });
  }
 
  
  /*const getCabines = () => {
    CabineService.getAll()
      .then((res) => {
        setCabines(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getSizes=()=>{
    SizeService.getAll()
    .then((res)=>{
      setSizes(res.data);
      console.log(res.data);
    })
    .catch((e)=>{
      console.log(e);
    });
  };
  useEffect(() => {
    getCabines();
  }, []);
  useEffect(() => {
    getSizes();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    box.ref=box.boardID+box.doorNumber;
    console.log("ref",box);
    dispatch(CreateBox(box));
  };
*/
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        noValidate
        autoComplete="off"
        onSubmit
      >
        <Typography.Title variant="h5">ajouter etablissement</Typography.Title>
        <Form.Item label="nom">
          <Input
            id="enter-nom"
            variant="outlined"
            value={transport.nom}
            onChange={(e) => setTransport({ ...transport, nom: e.target.value })}
          />
        </Form.Item>
        {/* <Form.Item label="Prenom">
          <Input
            id="enter-Prenom"
            variant="outlined"
            value={transport.prenom}
            onChange={(e) => setTransport({ ...transport, prenom: e.target.value })}
          />
        </Form.Item> */}
        {/* <Form.Item label="Reference">
          <Input
            id="enter-ref"
            variant="outlined"
            value={box.boardId +box.doorNumber }
            disabled="true"
            onChange={(e) => setBox({ ...box, ref: box.boardId +box.doorNumber })}
          />
        </Form.Item> */}
        {/* <Form.Item label="DateN">
        <Space direction="vertical" >
    <DatePicker onChange={onChange} />
    
    
  </Space>
  </Form.Item> */}
        <Form.Item label="tel">
          <InputNumber
            id="enter-tel"
            variant="outlined"
            value={transport.tel}
            onChange={(e) => setTransport({ ...transport, tel: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="adresse">
          <Input
            id="enter-status"
            variant="outlined"
            value={transport.adresse}
            onChange={(e) => setTransport({ ...transport, adresse: e.target.value })}
          />
          </Form.Item>
        <Form.Item label="email">
          <Input
            id="enter-status"
            variant="outlined"
            value={transport.email}
            onChange={(e) => setTransport({ ...transport, email: e.target.value })}
          />
      
        </Form.Item>
        {/* <Form.Item label="adresseArriv">
          <Input
            id="enter-status"
            variant="outlined"
            value={transport.adresseArriv}
            onChange={(e) => setTransport({ ...transport, adresseArriv: e.target.value })}
          />
          </Form.Item>
          <Form.Item label="adresseDep">
          <Input
            id="enter-status"
            variant="outlined"
            value={transport.adresseDep}
            onChange={(e) => setTransport({ ...transport, adresseDep: e.target.value })}
          />
          </Form.Item> */}
          <Form.Item label="typeEtb">
          <Input
            id="enter-status"
            variant="outlined"
            value={transport.typeEtb}
            onChange={(e) => setTransport({ ...transport, typeEtb: e.target.value })}
          />
          </Form.Item>
         {/* <Form.Item label="typeEtb>
          <Input
            id="enter-typeEtb
            variant="outlined"
            value={transport.typeEtb}
            onChange={(e) => setTransport({ ...transport, typeEtb: e.target.value })}
          /> */}
       
       
        {/* <Form.Item label="estUrgent" >
        <InputNumber
                  // type="number" 
                  min={0}
                  max={1}
                  id="enter_estUrgent"
                  variant="outlined"
                  value={transport.estUrgent}
                  onChange={(e)=>setTransport({...transport, availibility: e})}
                 /> 
                
                </Form.Item> */}
        {/* <Form.Item label="etablissement de santé">
          <Select
            id="enter-idcabine"
            label="enterIdcabine"
            variant="outlined"
            onChange
          >
            
          </Select>
        </Form.Item> */}
        
        <div className="btn1">
          <Button  htmlType="submit" onClick>
           ajouter
          </Button>
        </div>
      </Form>
    </>
  );
};
export default AddEtablist;
