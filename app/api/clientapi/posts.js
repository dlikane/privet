/*...*/

import request from 'utils/request';

export function getPostFromDbByOriginId(originId) {
  const requestUrl = "http://localhost:3003/api/posts?originId=" + originId;

  console.log('try to load post from DB: ' + requestUrl);
  return request(requestUrl);
}


export function savePost(post) {
  console.log('try to save post to DB: ' + JSON.stringify(post));
  let requestUrl = "http://localhost:3003/api/posts";

  let method = 'POST';
  let methodDescription = 'SAVED';
  if (post.get('_id')) {
    method = 'PUT';
    methodDescription = 'UPDATED';
    requestUrl += "/" + post.get('_id');
  }

  return request(requestUrl, {
    method: method,
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then( (newPost) => {
      console.log('post ' + methodDescription + ': ' + JSON.stringify(newPost));
      return newPost;
    });
}