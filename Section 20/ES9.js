// Object Spread Operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, lion,...rest } = animals;

const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
    return a+b+c+d+e
}

function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

// ES9 Async

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
  Promise.all(urls.map(url=> {
    return fetch(url).then(resp=>resp.json())
  })).then(results=> {
      throw Error;
    console.log(results[0])
    console.log(results[1])
  
    console.log(results[2])
  
    console.log(results[3])
  
  })
  .catch(()=>console.log('error'))
  .finally(() =>console.log('extra'));
  

  // for await of

  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  
  const getData = async function () {
    try {
      const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
          const response = await fetch(url);
          return response.json();
        }),
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
    } catch (err) {
      console.log('There was an error',err);
    }
  
  };

  const loopThroughUrls = url => {
      for (url of urls) {
          console.log(url)
      }
  }

  const getData2 = async function() {
      const arrayOfPromises = urls.map(url => fetch(url));
      for await (let request of arrayOfPromises) {
          const data = await request.json();
          console.log(data);
      }
  }