const auth = async (login, password) => {
    let result = null;
    try {
        result = await fetch('http://localhost:3000/connect', {
            method: "POST",
            body: JSON.stringify({
                login: login,
                password: password
            })
        });
    } catch (error) {
        throw error;
    }
    let data = await result.json();
    if (result.ok) {
        localStorage.addItem('user', JSON.stringify(data));
    } else {
        throw new Error(data.message);
    }
}

module.exports = { auth };