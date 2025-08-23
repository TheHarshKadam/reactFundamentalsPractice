import React from 'react'
import { useAuth } from './22.authContext';
export default function UserAuthUsingUseContext() {
    const { user, login, logout } = useAuth();
    return (
        <div>
            <h1>User Authentication Using Use Context</h1>
            <div>

                {
                    user ? (
                        <div>
                            <p>Welcome,{user.username} </p>
                            <button onClick={logout}>LOGOUT</button>
                        </div>
                    ) : (
                        <button onClick={() => login({ username: 'user123' })}>LOGIN</button>
                    )
                }
            </div>
        </div>
    )
}
