import fetch from 'isomorphic-fetch';

export function getProducts(){
  var url = 'https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
  return fetch(url)
    .then(function(response) {
      if(response.status >= 400) {
        throw new Error("bad response from server");
      }
    console.log(response);
    return response.json();
  })
}
