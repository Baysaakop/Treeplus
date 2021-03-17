import { List, Avatar } from 'antd';
import React from 'react';

const data = [
    {
        title: 'Bruce Wayne',
        description: 'I am Batman.',
        number: 10000000,
    },
    {
        title: 'Tony Stark',
        description: '"Friday"',
        number: 1000000,
    },
    {
        title: 'Diana Prince',
        description: 'For Themyscira',
        number: 200000,
    },
    {
        title: 'Peter Parker',
        description: 'Your friendly neighborhood Spider-Man',
        number: 1,
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
                            avatar={<Avatar size={64} shape="circle" style={{ border: '1px solid #fff' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                        />
                        <div>{item.number} мод</div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Leaderboard;