import { Layout} from 'antd';

import NavBar from './NavBar';
import SideBar from './SideBar';
import './dashboarsLayout.css'
const { Header, Content, Sider } = Layout;

const LayoutDashboard=(props)=>{



return (
  <Layout>
    
    <Header className="header"
    >
     <NavBar/>
    </Header>
    <Layout>
      <Sider width={200} className="sider">
     <SideBar/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px'  }}>
     
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
       {props.children}     
        </Content>
      </Layout>
    </Layout>
  </Layout>
  
)};
export default LayoutDashboard;
