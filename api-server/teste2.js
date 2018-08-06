const clone = require('clone')

const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}

function getByCategory (category) {
  return new Promise(res => {
    let posts = clone(defaultData)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(
      key => posts[key].category === category && !posts[key].deleted
    )
    res(filtered_keys.map(key => posts[key]))
    console.log(typeof res)
  })
}

getByCategory('redux').then(posts => {
  console.log(posts)
})
