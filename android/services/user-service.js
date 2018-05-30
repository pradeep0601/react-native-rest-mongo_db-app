
const UserService = {
    getAllCustomers() {
        const URL = `http://10.77.250.41:3000/v1/shopping`;
        return fetch(URL).then((res) => res.json());
    },

    register(user) {
        console.log(`Customer Service:`, JSON.stringify(user));
        const URL = `http://192.168.1.4:3000/v1/shopping`;
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': user.email,
                'name': user.name,
                'password': user.password,
                'isvegan': `${user.isvegan}`
            })
        })
        .then((res) => res.json())
        .catch(err => {
            console.log(err);
        });
    }
}

export default UserService;