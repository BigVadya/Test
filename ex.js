fetch('https://3fj5drqagtygntho2stxt45gz752tthi.oastify.com')
  .then(response => response.text())
  .then(data => {
    // Do something with the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });
