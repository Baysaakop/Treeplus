import React from 'react';
import { Grid, Col, Divider, Row, Typography, Avatar } from 'antd';
import './Home.css';
import About from '../components/About';
import TreeCountOrder from '../tree/TreeCountOrder';
import TreeList from '../tree/TreeList';
import ProjectList from '../project/ProjectList';
import Leaderboard from '../account/Leaderboard';
import Greenzone1 from './images/Greenzone1.svg';
import Greenzone2 from './images/Greenzone2.svg';
import HomeOrder from '../tree/HomeOrder';
import Idea from '../components/Idea';
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
                        <div style={{ background: 'rgba(38, 194, 129, 0.8)', border: '1px solid #f1f1f1', borderRadius: '5px', padding: '16px', textAlign: 'center' }}>
                            {/* <TreeCountOrder /> */}
                            <HomeOrder />
                        </div>                    
                    </div>                   
                </div>     
            ) : (
                <div>
                    <div style={{ width: '100%', position: 'relative' }}>
                        <img className="home-landscape" alt="landscape" />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(38, 194, 129, 0.8)', border: '1px solid #f1f1f1', borderRadius: '5px', width: '600px', padding: '16px', textAlign: 'center' }}>
                            {/* <TreeCountOrder /> */}
                            <HomeOrder />
                        </div>
                    </div>                                       
                </div>
            )}   
            <div style={{ padding: screens.xs ? '16px' : '24px 15%' }}>
                <Idea />
            </div>
            <div style={{ padding: screens.xs ? '16px' : '24px 15%' }}>
                <About />  
            </div>                   
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
                        <Leaderboard type="people" />                   
                    </Col>
                    <Col xs={24} sm={24} md={12} style={{ padding: '0 16px' }}>
                        <Typography.Title level={4} style={{ textAlign: 'center' }}>Байгууллага</Typography.Title>
                        <Leaderboard type="company" /> 
                    </Col>
                </Row>
            </div>   
            <div style={{ margin: '0 15% 5% 15%' }}>                
                <Typography.Title level={3} style={{ textAlign: 'center' }}>ЗУРАГ</Typography.Title>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col xs={12} sm={12} md={6}>
                        <img alt="img" src="https://i.pinimg.com/236x/17/17/b5/1717b5e9bcdba2e2ee9a005c71fdaaa3.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/42/94/3c/42943c5107da60c5263df69f245d8f8a.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/63/c7/44/63c7449ef78a506ab488dbdc832c1c5a.jpg" style={{ width: '100%', margin: '8px' }} />
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <img alt="img" src="https://i.pinimg.com/236x/57/fe/c3/57fec3c282345c1d3efe25850f1a4fa3.jpg" style={{ width: '100%', margin: '8px' }} />                        
                        <img alt="img" src="https://i.pinimg.com/236x/ed/5f/73/ed5f739ff244c57ced76a774c7b3139b.jpg" style={{ width: '100%', margin: '8px' }} />                        
                        <img alt="img" src="https://i.pinimg.com/236x/45/6d/08/456d082dcf1254d7a3ff03eac96c0ade.jpg" style={{ width: '100%', margin: '8px' }} />
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <img alt="img" src="https://i.pinimg.com/236x/ce/41/9e/ce419e90606c64822492075bf33d22b5.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/8f/06/be/8f06bef58a87f5f8564d0f4bf66de1ef.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/59/6f/24/596f24f1d56f04f6103aecf64a667b71.jpg" style={{ width: '100%', margin: '8px' }} />
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <img alt="img" src="https://i.pinimg.com/236x/9c/80/ee/9c80ee01f4e79c4b9bc05cd21952126a.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/70/67/48/706748007ccdbb941114827a227a9235.jpg" style={{ width: '100%', margin: '8px' }} />
                        <img alt="img" src="https://i.pinimg.com/236x/a5/f8/cd/a5f8cdf59400709b4ea2fc4c71d21fd4.jpg" style={{ width: '100%', margin: '8px' }} />                        
                    </Col>
                </Row>
            </div>  
            <div style={{ margin: '0 15% 5% 15%' }}>                
                <Typography.Title level={3} style={{ textAlign: 'center' }}>МАНАЙ ХАМТ ОЛОН</Typography.Title>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/121093920_2864925237071204_6015380370718993806_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=5QdKWO4md60AX_0d0-h&_nc_ht=scontent.fuln2-1.fna&oh=4cd512e3747a2f5fe457bfc70f1fcab4&oe=6092B17A" />
                        <Typography.Title level={4}>Л.Батгүн</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Founder and CEO</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/72769466_490437751814867_7774020586786783232_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=PEl8W2-jwLUAX-aKY68&_nc_ht=scontent.fuln2-1.fna&oh=1f91c3e071b68df50e4db1325ff9d019&oe=60939F6C" />
                        <Typography.Title level={4}>Б.Банзрагч</Typography.Title>
                        <Typography.Text type="secondary" level={4}>CTO</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/101568430_257574548810298_4914460348060373276_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=-YCVL4r6U0AAX_L_ouu&_nc_ht=scontent.fuln2-1.fna&oh=abe1134ebe5ad00992d251ca9bc6554b&oe=60919DB4" />
                        <Typography.Title level={4}>Б.Энхбаяр</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Business Development Officer</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/48398278_680740865654302_9221350236834758656_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Stvg9kHF-RUAX_Oc5JZ&_nc_ht=scontent.fuln8-1.fna&oh=1c073051486da51226dda367446118c5&oe=60917EDF" />
                        <Typography.Title level={4}>Т.Ганзориг</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/102719355_649032535701407_8915476942440918859_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=mfCu-lz3AysAX-wF_t5&_nc_ht=scontent.fuln2-1.fna&oh=3aa5dd7de8477cc86d3063ff140adaba&oe=6091938B" />
                        <Typography.Title level={4}>Ч.Чойжин</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/71207242_684652078722196_5551024120868634624_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0cuJ_ECTutEAX-PhEHJ&_nc_ht=scontent.fuln2-1.fna&oh=297e0c1fd60afca731a1a6a299b4989f&oe=6092364F" />
                        <Typography.Title level={4}>Ц.Билгүүн</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/101851476_1180953878921548_6113419286855083245_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=rLRz_EgGIFIAX8_A3cK&_nc_ht=scontent.fuln8-1.fna&oh=d5f13c44ba77b131ea8b81b04f4a76ae&oe=606EDCAD" />
                        <Typography.Title level={4}>У.Эрхэмбаяр</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/48277974_565935937181804_51205059664412672_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ZwPcAgi3g64AX9-MDeR&_nc_ht=scontent.fuln8-1.fna&oh=12599dcf0a6db07d0d5292c1c925d487&oe=60947881" />
                        <Typography.Title level={4}>Б.Батбаясгалан</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.15752-9/48358938_284121688973999_6258643094103654400_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=jegAuDHtxB4AX9F9WZD&_nc_ht=scontent.fuln8-1.fna&oh=46bea979a84039ade40ed562433ec52b&oe=609281ED" />
                        <Typography.Title level={4}>Б.Энхсанаа</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/69800669_2539659242792478_3293297729056276480_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=a9D0aSkl3gEAX_W7-4G&_nc_ht=scontent.fuln2-1.fna&oh=47f263328775f08a759e6bb8f45d66ed&oe=609386FB" />
                        <Typography.Title level={4}>М.Отгон-Эрдэнэ</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/88228532_195357131739185_7279259806194466816_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=1tg6qonFVcoAX9i4nYN&_nc_ht=scontent.fuln2-1.fna&tp=6&oh=75c2ae8f8baca16e37dd85309e96b595&oe=60934F48" />
                        <Typography.Title level={4}>Б.Мөнхтөгөлдөр</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                        <Avatar size={128} src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.15752-9/p2048x2048/88099440_144513690059484_6700572306621595648_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=7_lXWD0kBmoAX86R8PR&_nc_ht=scontent.fuln2-1.fna&tp=6&oh=17f33e694d696f27579f0e3c6c80d9d1&oe=60942C0B" />
                        <Typography.Title level={4}>П.Баясгалан</Typography.Title>
                        <Typography.Text type="secondary" level={4}>Advisor</Typography.Text>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home;