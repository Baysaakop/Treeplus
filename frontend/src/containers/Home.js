import React from 'react';
import { Grid, Col, Divider, Row, Typography } from 'antd';
import './Home.css';
import About from '../components/About';
import TreeCountOrder from '../tree/TreeCountOrder';
import TreeList from '../tree/TreeList';
import ProjectList from '../project/ProjectList';
import Leaderboard from '../account/Leaderboard';
// import Greenzone1 from './images/Greenzone1.svg';
import Greenzone2 from './images/Greenzone2.svg';
// import axios from 'axios';  
// import api from '../api';
// import { Link } from 'react-router-dom';

const { useBreakpoint } = Grid;

function Home (props) {    
    const screens = useBreakpoint();    

    return (
        <div className="home">
            { screens.xs ? (
                <div>
                    <div style={{ width: '100%' }}>
                        <img className="home-landscape" alt="landscape" />
                        <div style={{ background: 'rgba(38, 194, 129, 0.8)', border: '1px solid #f1f1f1', borderRadius: '5px', width: '400px', padding: '16px', textAlign: 'center' }}>
                            <TreeCountOrder />
                        </div>                    
                    </div>                   
                </div>     
            ) : (
                <div>
                    <div style={{ width: '100%', position: 'relative' }}>
                        <img className="home-landscape" alt="landscape" />
                        <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translate(0%, -50%)', background: 'rgba(38, 194, 129, 0.8)', border: '1px solid #f1f1f1', borderRadius: '5px', width: '400px', padding: '16px', textAlign: 'center' }}>
                            <TreeCountOrder />
                        </div>
                    </div>                                       
                </div>
            )}   
            <About />         
            <div style={{ margin: '0 15% 5% 15%' }}>                
                <Typography.Title level={3} style={{ textAlign: 'center' }}>МОД</Typography.Title>
                <Divider />
                <TreeList />
            </div>
            <div style={{ margin: '0 15% 5% 15%' }}>                
                <Typography.Title level={3} style={{ textAlign: 'center' }}>ТӨСЛҮҮД</Typography.Title>
                <Divider />
                <ProjectList />
            </div> 
            <div style={{ margin: '0 15% 5% 15%' }}>                
                <Typography.Title level={3} style={{ textAlign: 'center' }}>ГИШҮҮД</Typography.Title>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} style={{ padding: '0 16px' }}>
                        <Typography.Title level={4} style={{ textAlign: 'center' }}>Хувь хүн</Typography.Title>     
                        <Leaderboard />                   
                    </Col>
                    <Col xs={24} sm={24} md={12} style={{ padding: '0 16px' }}>
                        <Typography.Title level={4} style={{ textAlign: 'center' }}>Компани</Typography.Title>
                        <Leaderboard /> 
                    </Col>
                </Row>
            </div>    
            <div style={{ margin: '0 15% 5% 15%' , display: 'flex', justifyContent: 'center'}}>        
                <img src={Greenzone2} alt="Greenzone2" style={{ width: 'auto', height: '400px', overflow: 'auto'  }} />
            </div> 
        </div>
    )
}

export default Home;