import React from 'react'


interface MessageProps {
    message: string
    name: string
    user: string
}
const Message: React.FC <MessageProps>= ({ message, name }) => {
    let sentByCurrentUser = false;

    const trimName = name.trim().toLowerCase();

    if (user === trimName) {
        sentByCurrentUser = true
    }

    return (
        sentByCurrentUser
        ? (
            <div>
                <p>{trimName}</p>
            </div>
        )
    )
}

export default Message;
