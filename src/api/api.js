export const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password}),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Login Fail.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};