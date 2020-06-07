// Promise Syntax

movePlayer(100, 'Left')
    .then(()=> movePlayer(400, 'Left'))
    .then(()=> movePlayer(10,'Right'))
    .then(()=>movePlayer(330,'Left'))


// Async Syntax

async function playerStart() {
    const first = await movePlayer(100,'Left');
    const second = await movePlayer(400,'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330,'Left');

}

//Promise Function

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// Aysnc syntax

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}


const urls= [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'

]

Promise.all(urls.map(url => {
    return fetch(url).then(resp =>resp.json())
})).then(results =>{
    console.log(results[0])
    console.log(results[1])

    console.log(results[2])

}).catch(() => console.log('error'))


const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp =>resp.json())
       ))
       console.log('users', users)
       console.log('posts',posts)
       console.log('albums',albums)
    } catch (err) {
        console.log('ooops',err)
    }

}