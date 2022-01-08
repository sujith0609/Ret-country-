const baseUrl = 'https://61d13f54cd2ee50017cc99f4.mockapi.io/api/';

//read

const getPosts = () => {

    fetch(`${baseUrl}/Posts`)
        .then((data) => data.json())
        .then((res) => console.log(res));
};

getPosts();

const createpost = () => {

    const postdata = {

        imageUrl: 'https://picsum.photos/200/300',

        title: 'a  mountain view ',
        description: 'beautiful view of from top of the mointain',
    };

    fetch(baseUrl + '/Posts', {

        method: 'Post',
        body: JSON.stringify(postdata),
        headers: {
            'content-Type': 'application/json;charset=utf-8',
        },
    })

    .then((data) => data.json())
        .then((res) => console.log(res));
};

createpost();

const updatepost = () => {


    const postdata = {

        imageUrl: 'https://picsum.photos/200',

        title: 'a  sujith ',
        description: 'beautiful view ',
    };

    fetch(`${baseUrl}/Posts/15`, {

        method: 'put',
        body: JSON.stringify(postdata),
        headers: {
            'content-Type': 'application/json;charset=utf-8',
        },
    })

    .then((data) => data.json())
        .then((res) => console.log('creation Response', res));
};

updatepost();

// const deletepost = () => {

//     fetch(`${baseUrl}/Posts/10`, {

//         method: 'DELETE',
//     })

//     .then((data) => data.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));

// };

// deletepost();