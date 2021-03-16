import { Grid, Button, Col, Divider, InputNumber, Radio, Row, Typography } from 'antd';
import React from 'react';
import './Home.css';
// import axios from 'axios';  
// import api from '../api';
// import { Link } from 'react-router-dom';

const { useBreakpoint } = Grid;

function Home (props) {    
    const screens = useBreakpoint();
    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    return (
        <div className="home">
            { screens.xs ? (
                <div style={{ width: '100%' }}>
                    <img className="home-landscape" alt="landscape" />
                    <div style={{ background: 'rgba(255, 255, 255, 0.6)', borderRadius: '5px', width: '400px', padding: '16px', textAlign: 'center' }}>
                        <Typography.Title level={3}>LET'S PLANT TREES!</Typography.Title>
                        <Typography.Title level={5}>1$ plants a tree</Typography.Title>
                        <Radio.Group onChange={onChange} defaultValue="1" style={{ width: '100%' }} size="large">
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Radio.Button shape="rounded" value="1" style={{ width: '100%' }}>5 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="2" style={{ width: '100%' }}>20 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="3" style={{ width: '100%' }}>50 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="4" style={{ width: '100%' }}>100 trees</Radio.Button>
                                </Col>
                            </Row>
                        </Radio.Group>
                        <InputNumber size="large" min={1} max={100000} placeholder="Other amount" style={{ width: '100%', marginTop: '16px' }} />
                        <Divider />
                        <Button size="large" shape="round" type="primary" style={{ width: '100%' }}>NEXT</Button>
                    </div>                    
                </div>
            ) : (
                <div style={{ width: '100%', position: 'relative' }}>
                    <img className="home-landscape" alt="landscape" />
                    <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translate(0%, -50%)', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '5px', width: '400px', padding: '16px', textAlign: 'center' }}>
                        <Typography.Title level={3}>LET'S PLANT TREES!</Typography.Title>
                        <Typography.Title level={5}>1$ plants a tree</Typography.Title>
                        <Radio.Group onChange={onChange} defaultValue="1" style={{ width: '100%' }} size="large">
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Radio.Button shape="rounded" value="1" style={{ width: '100%' }}>5 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="2" style={{ width: '100%' }}>20 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="3" style={{ width: '100%' }}>50 trees</Radio.Button>
                                </Col>
                                <Col span={12}>
                                    <Radio.Button value="4" style={{ width: '100%' }}>100 trees</Radio.Button>
                                </Col>
                            </Row>
                        </Radio.Group>
                        <InputNumber size="large" min={1} max={100000} placeholder="Other amount" style={{ width: '100%', marginTop: '16px' }} />
                        <Divider />
                        <Button size="large" shape="round" type="primary" style={{ width: '100%' }}>NEXT</Button>
                    </div>
                </div>
            )}
            
            <div style={{ marginTop: '124px', display: 'block', height: '600px' }}>
                <Typography.Title level={3}>LEADERBOARD</Typography.Title>
            </div>
        </div>
    )
}

export default Home;