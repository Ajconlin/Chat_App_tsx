import React from 'react'
// import material ui icon

interface Props {
    room: string
}

const ChatBar: React.FC<Props> = ({ room }) => (
        <div className='chatBar'>
            <div className='leftInnerCont'>
                // icon goes here
                <h3>{room}</h3>
            </div>
            <div className='rightInnerCont'>
                <a href='/'>close out icon</a>
            </div>
        </div>
    )


export default ChatBar;
