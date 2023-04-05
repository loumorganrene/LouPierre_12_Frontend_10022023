import React, { useState, useEffect } from 'react';
const BASE_URLL = `http://localhost:3001/user/`

function UserProfile() {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${BASE_URLL}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const user = data.find(u => u.id);
                setUser(user);
            } catch (err) {
                setError(err);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const url = window.location.href.split('/');
        url.pop();
        url.push(user.id);
        window.history.replaceState(null, null, url.join('/'));
    }, [user]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        </div>
    );
}

export default UserProfile;