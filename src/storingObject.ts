const user: String = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

localStorage.setItem('user', userJSON);

const storedUserJSON = localStorage.getItem('user')
    const storedUser = JSON.parse(storedUserJSON)
    console.log(storedUser)