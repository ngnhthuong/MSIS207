import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

const SidebarChat = ({ messages }) => {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src='https://avatars.dicebear.com/api/human/b${seed}.svg' />
            <div className="sidebarChat__info">
                <h2>Nguyễn Nhất Thưởng</h2>
                {Array.isArray(messages) && messages.length > 0 ? (
                    <p>{messages[messages.length - 1]?.message}</p>
                ) : (
                    <p>1 New Message</p>
                )}
            </div>
        </div>
    )
}
export default SidebarChat;
