import { Message } from '@material-ui/icons';
import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom';
import Message from './Message';

interface MessagesProps {
    messages: string[]
    name: string
}

const Messages: React.FC<MessagesProps> = ({ messages, name }) => (
        <ScrolltoBottom>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrolltoBottom>
    )

export default Messages;
