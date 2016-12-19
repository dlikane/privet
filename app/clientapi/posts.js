/*...*/

import request from 'utils/request';

export function getPostFromDbByOriginId(originId) {
  const requestUrl = "http://localhost:3003/api/posts?originId=" + originId;

  console.log('try to load post from DB: ' + requestUrl);
  return request(requestUrl);
}


export function savePost(post) {
  const requestUrl = "http://localhost:3003/api/posts?originId=" + originId;

  console.log('try to load post from DB: ' + requestUrl);

  let method = post.id ? 'PUT' : 'POST';

  const newPost = request(requestUrl, {
    method: method,
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });

  console.log('got it: ' + JSON.stringify(newPost));
  return newPost;
}