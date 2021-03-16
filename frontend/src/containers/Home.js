import { Button, Carousel, Col, Divider, InputNumber, Radio, Row, Typography } from 'antd';
import Form from 'antd/lib/form/Form';
import React from 'react';
import Wildlife from './Wildlife.jpg';
// import axios from 'axios';  
// import api from '../api';
// import { Link } from 'react-router-dom';

const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '280px',
    textAlign: 'center',
    background: '#364d79',
};

function Home (props) {    
    // const [data, setData] = useState();

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: `${api.items}/`
    //     }).then(res => {            
    //         setData(res.data)
    //     }).catch(err => {
    //         console.log(err.message)
    //     })        
    // }, [])   

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    return (
        <div>
            <div style={{ width: '100%', position: 'relative' }}>
                <img src={Wildlife} alt="landscape" style={{ width: '100%', height: 'auto' }} />
                <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0%)', background: '#fff', borderRadius: '5px', width: '400px', padding: '16px', textAlign: 'center' }}>
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
        </div>
    )
}

export default Home;