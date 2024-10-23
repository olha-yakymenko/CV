'use strict'
const axios = require("axios")
//zad 1.1
const a = axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (response.status === 200) {
            console.log("status rowny 200");
        }
        return response;
    })
    .catch(error => {
        console.error(error);
    })
    .then(response => {

        console.log(response.data, response.headers);

    });

//zad 1.2
function f(obj) {
    return axios.post("https://jsonplaceholder.typicode.com/todos", obj)
        .then(response => {
            console.log(`Dodano: ${response.data.idUser}`)
        })
        .catch(error => console.log(error))
}
f({
    idUser: "a",
    title: "b",
    completed: true
})