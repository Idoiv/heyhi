import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/.auth/me');
                if (response.data && response.data.length > 0) {
                    setUser(response.data[0].user_claims);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user information:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading };
};

export default useAuth;
