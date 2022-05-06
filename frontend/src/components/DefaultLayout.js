import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import '../resources/defaultLayout.css'
function DefaultLayout(props) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('loginDetails'));
    const menu = (
        <Menu
            items={[
                // {
                //     label: (
                //         <a target="_blank" rel="noopener noreferrer" href="/home">
                //             Home
                //         </a>
                //     ),
                // },
                // {
                //     label: (
                //         <a target="_blank" rel="noopener noreferrer" href="/about">
                //             About
                //         </a>
                //     ),
                // },
                {
                    onClick: (() => {
                        localStorage.removeItem('todoList')
                        localStorage.removeItem('loginDetails')
                        navigate('/login');
                    }),
                    label: (
                        <span>
                            Logout
                        </span>
                    ),
                },
            ]}
        />
    );
    return (
        <div>
            <div className="defaultlayout">
                <div className="header">
                    <h1>Todo</h1>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button style={{
                            color: 'black'
                        }}>{user.username}</Button>
                    </Dropdown>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout