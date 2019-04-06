axios.get('https://api.github.com/users/cavalsilva')
    .then(function (response) { 
        console.log(response);
    })
    .catch(function (error) { 
        console.warn(error);
    });
