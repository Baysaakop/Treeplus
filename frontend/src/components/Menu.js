import React, { useEffect, useState } from 'react';
import { Button, Grid } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { CloudOutlined, MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
// import logo from './onplus-logo.png';
// import axios from 'axios';
// import api from '../api';
const { useBreakpoint } = Grid;

function CustomMenu (props) {    
    const screens = useBreakpoint();    
    const [collapsed, setCollapsed] = useState(true);      
    // const [user, setUser] = useState();

    useEffect(() => {
        // const menuItem = props.location.pathname.toString().split('/')[1]
        // switch(menuItem) {
        //     case '':
        //         setCurrent('home')
        //         break
        //     case 'items':
        //         setCurrent('items')
        //         break
        //     case 'help':
        //         setCurrent('help')
        //         break
        //     case 'contact':
        //         setCurrent('contact')
        //         break
        //     case 'account':
        //         setCurrent('account')
        //         break
        //     default:
        //         setCurrent('home')
        //         break
        // }
        // if (props.token) {
        //     if (!user) {
        //         axios({
        //             method: 'GET',
        //             url: api.profile,
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Token ${props.token}`
        //             }
        //         }).then(res => {                    
        //             setUser(res.data)
        //         }).catch(err => {
        //             console.log(err.message)
        //         })
        //     }
        // } else {
        //     setUser(null)
        // }
    }, [props.location, props.token]);

    // const handleMenuClick = (e) => {               
    //     setCurrent(e.key);
    //     setCollapsed(true);        
    // };

    const handleMenuCollapsed = () => {
        setCollapsed(!collapsed);
    }     

    const styleHeaderWeb = {
        display: 'flex',
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: '0 15%',
        height: '80px',    
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)'
    }
    
    const styleHeaderMobile = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '8%',
        height: '80px',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)'
    }
    
    const styleLogo = {
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'center',    
        height: '80px'
    }    
    
    const styleMenuItemWeb = {    
        marginRight: '8px'      
    }

    const styleMenuItemMobile = {    
        width: '100%',
        height: '25%',
        margin: '0',
        padding: '0',
        alignItems: 'center'       
    }    

    return (
        <div>              
            {screens.xs ? (
                <div>
                    <div style={styleHeaderMobile}>
                        <div>
                            <Link to="/">
                                <div style={styleLogo}>         
                                    <div style={{ display: 'flex', alignItems: 'center' }}>                                        
                                        <CloudOutlined style={{ fontSize: '24px', color: props.darkMode ? '#fff' : '#000' }} />
                                    </div>
                                    <div style={{ fontSize: '24px', marginLeft: '8px', color: props.darkMode ? '#fff' : '#000' }}>                        
                                        TreePlus                        
                                    </div>                        
                                </div>       
                            </Link>
                        </div>
                        <div>
                            <Button 
                                size="large"
                                shape="circle" 
                                type="primary" 
                                icon={<MenuOutlined />} 
                                onClick={handleMenuCollapsed} 
                                style={ props.darkMode ? { background: 'transparent', color: '#fff', border: '1px solid #fff' } : { background: 'transparent', color: '#000', border: '1px solid #000' }} 
                            />
                        </div>        
                    </div>   
                    { collapsed ? (
                        <></>
                    ) : (
                        <div style={{ width: '100%', height: '90vh', background: props.darkMode ? "#161b22" : "#fff" }}>                            
                            <Button type="text" size="large" style={styleMenuItemMobile}>
                                Trees
                            </Button> 
                            <Button type="text" size="large" style={styleMenuItemMobile}>
                                News
                            </Button>                            
                            <Button type="text" size="large" style={styleMenuItemMobile}>
                                Members
                            </Button>
                            <Button type="text" size="large" style={styleMenuItemMobile}>
                                Sign In
                            </Button>
                        </div>
                    )}                             
                </div>
            ) : (
                <div style={styleHeaderWeb}>
                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center' }}>
                        <Link to="/">
                            <div style={styleLogo}>         
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {/* <Avatar size="large" src={logo} />  */}
                                    <CloudOutlined style={{ fontSize: '24px', color: props.darkMode ? '#fff' : '#000' }} />
                                </div>
                                <div style={{ fontSize: '24px', marginLeft: '8px', color: props.darkMode ? '#fff' : '#000' }}>                        
                                    TreePlus                        
                                </div>                        
                            </div>       
                        </Link>
                    </div>
                    <div style={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button type="ghost" shape="round" size="large" style={styleMenuItemWeb}>
                            Trees
                        </Button>
                        <Button type="ghost" shape="round" size="large" style={styleMenuItemWeb}>
                            News
                        </Button>
                        <Button type="ghost" shape="round" size="large" style={styleMenuItemWeb}>
                            Members
                        </Button>
                    </div>
                    <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Button type="ghost" shape="round" size="large">
                            Sign in
                        </Button>
                    </div>                   
                </div>
            )}                        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomMenu));