import { List, Avatar, Tag } from 'antd';
import React from 'react';

const data = [
    {
        title: 'Bruce Wayne',
        description: 'I am Batman.',
        number: 10000000,
        avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg/220px-Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg",
        date: '3/18/2021, 8:58:09 AM',
    },
    {
        title: 'Tony Stark',
        description: '"Friday"',
        number: 1000000,
        avatar: "https://dailysuperheroes.com/wp-content/uploads/2020/02/tony-stark.jpg",
        date: '3/18/2021, 7:25:14 AM',
    },
    {
        title: 'Diana Prince',
        description: 'For Themyscira',
        number: 200000,
        avatar: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B793%2C1000%5D&w=1586&h=2115&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2018%2F02%2F28%2F022818-gal-gadot-tout-2000.jpg",
        date: '3/18/2021, 7:11:55 AM',
    },
    {
        title: 'Peter Parker',
        description: 'Your friendly neighborhood',
        number: 1,
        avatar: "https://i.pinimg.com/originals/38/95/e7/3895e787404e479b3ef53a03e60512f6.jpg",
        date: '3/17/2021, 23:28:45 AM',
    },
];

function Leaderboard () {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size={64} shape="circle" style={{ border: '1px solid #fff' }} src={item.avatar} />}
                            title={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <a href="https://ant.design">{item.title}</a>
                                    <Tag color="green" style={{ fontSize: '16px' }}>{item.number} мод</Tag>      
                                </div>                                
                            }
                            description={
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>{item.description}</div>
                                    <div>{item.date}</div>
                                </div>                                  
                            }
                        />
                        {/* <div>
                            <Tag color="green" style={{ fontSize: '16px' }}>{item.number} мод</Tag>                            
                        </div> */}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Leaderboard;