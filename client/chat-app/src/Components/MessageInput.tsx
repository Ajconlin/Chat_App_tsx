import React from 'react'

interface Props {
    setMessage: any
    sendMessage: any
    message: string
}

const MessageInput: React.FC<Props>= ({ setMessage, sendMessage, message }) => {
    return (
        <form>
            <input
            type="text"
            placeholder="Say something"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button onClick={(event) => sendMessage(event)}>Send</button>
        </form>
    )
}

export default MessageInput
