export default () => {
  return fetch('/node').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
};