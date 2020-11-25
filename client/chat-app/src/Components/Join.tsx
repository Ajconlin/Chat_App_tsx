import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Join: React.FC= () => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <h1 className='heading'>Join</h1>
                <div>
                    <input placeholder='Name'
                    className='joinInput'
                    type='text'
                    onChange={ (event) => setName(event.target.value) } />
                 </div>
                <div>
                    <input placeholder='Room'
                    className='joinInput'
                    type='text'
                    onChange={ (event) => setRoom(event.target.value) } />
                </div>
                <Link
                onClick={event => (!name || !room) ? event.preventDefault() : null}
                to={`/chat?name=${name}&room=${room}`}>
                    <button className='button' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
