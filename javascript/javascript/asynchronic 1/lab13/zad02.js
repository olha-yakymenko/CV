'use strict';
const axios = require("axios");

const getRand = (count, arr) => {
    if (count === 0) {
        return arr;
    } else {
        const a = Math.floor(Math.random() * 100);
        return getRand(count - 1, [...arr, a]);
    }
};

const f = () => {
    const arr = getRand(10, []);
    console.log(arr);

    const promises = arr.map(id => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(postResponse => {
                const post = postResponse.data;
                return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(commentsResponse => {
                        const comments = commentsResponse.data;
                        return {
                            entry: {
                                title: post.title,
                                body: post.body
                            },
                            comments: comments.map(comment => ({
                                name: comment.name,
                                email: comment.email,
                                body: comment.body
                            }))
                        };
                    });
            })
            .catch(error => {
                console.error(`Error fetching data for ID ${id}:`, error);
                return null;
            });
    });

    Promise.all(promises)
        .then(results => {
            console.dir(results, { depth: null });
        })
        .catch(error => {
            console.error('Error with Promise.all:', error);
        });
};

f();
