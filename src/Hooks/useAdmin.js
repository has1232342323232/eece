import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
            if (email) {
                fetch(`https://eece-server.vercel.app/allRegisterUsers/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin);
                })
            }
    }, [email])
    return [isAdmin]
};

export default useAdmin;