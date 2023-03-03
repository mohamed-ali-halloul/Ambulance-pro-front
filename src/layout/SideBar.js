import React from 'react';
import { Menu } from 'antd';
import {
    TeamOutlined ,
    SnippetsOutlined,
    InboxOutlined,
    EuroOutlined,
  } from '@ant-design/icons';
import {useHistory, Link}  from 'react-router-dom';
import './SideBar.css';
const SideBar= () => {
    const history = useHistory();
    const { SubMenu } = Menu;
    const handlehomeClick=()=>{
      history.push("/home");
    }
    const handleAddClick = () => {
        history.push('/addTransport');
    }

    const handleListeClick = () => {
        history.push('/TransportList');
    }

    const handleoneboxClick = () => {
        history.push('/');
    }
    const handleAddEClick=()=>{
      history.push('/AddEtablis');
    }
   const handleEtablisClick=()=>{
     history.push('/EtbsListe')
   }
   const handleTarif=()=>{
     history.push('/readtarifs') }
  return (
      <div >
        <div style={{margin: "8px"}}></div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
      
          style={{ height: '100%', borderRight: 0 }}
        >
             <Menu.Item key="1" onClick={handlehomeClick} style={{textAlign:"left"}} icon={<SnippetsOutlined />}>
              
              Dashboard
           
              </Menu.Item>
          <SubMenu key="sub1" icon={<TeamOutlined />} title="OPERATEUR">
            <Menu.Item key="7" onClick={handleAddClick}>Ajouter un transport </Menu.Item>
            <Menu.Item key="2" onClick={handleListeClick}>Listes des trasnports</Menu.Item>
            <Menu.Item key="3" onClick={handleAddEClick}> ajouter une établissement</Menu.Item>
            <Menu.Item key="4" onClick={handleEtablisClick}>Listes des établissements</Menu.Item>
            
          </SubMenu>
         
         
        </Menu>
        </div>
  );
}

export default SideBar;