//Make a POST that creates a post
axios.request({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts', 
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  data: {
    title: 'Travel',
    body: 'The best time to travel is as soon as possible',
    userId: 5,
  }
}).then(postSuccess).catch(postFail);

function postSuccess(response) {
    console.log(response);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Post Success |');
}

function postFail(error) {
    console.log(error);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Post not successful, something went wrong |');
}

//Patch a post (patching post with ID of 25)
axios.request({
  method: 'PATCH',
  url: 'https://jsonplaceholder.typicode.com/posts/25',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  data: {
    id: 25,
    title: 'Travel further',
    body: 'If you need to travel far, you should probably plan ahead',
    userId: 3,
  }
}).then(patchSuccess).catch(patchFail);

function patchSuccess(response) {
    console.log(response);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Patch Success |');
}

function patchFail(error) {
    console.log(error);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Patch not successful, something went wrong |');
}

//Delete a post (deleting post with ID of 7)
axios.delete('https://jsonplaceholder.typicode.com/posts/7').then(deleteSuccess).catch(deleteFail);

function deleteSuccess(response) {
    console.log(response);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Delete Success |');
}

function deleteFail(error) {
    console.log(error);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Delete not successful, something went wrong |');
}

//Gets all posts
axios.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts'
}).then(getSuccess).catch(getFail);

function getSuccess(response) {
    console.log(response);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Get Success |');
}

function getFail(error) {
    console.log(error);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Get not successful, something went wrong |');
}

//Bonus. Display comments for post (Post with ID 2).
axios.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/2/comments'
}).then(getCommentsSuccess).catch(getCommentsFail);

function getCommentsSuccess(response) {
    console.log(response);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Get Comments Success |');
}

function getCommentsFail(error) {
    console.log(error);
    document.querySelector('body').append(document.createElement('h2').innerText = ' Get Comments not successful, something went wrong |');
}
