

 
function createPage(response) {
    const{name, id, email, role, office, school, github}= response

  

  
  const html = `
 
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>MY Team</title>
  </head>
  <body>
    <nav class="nav justify-content-center h1 " >My Team</nav>

    <div class="card" style="width: 18rem;">
      <h2>`${name}`</h2>
      <h3>`${role}`</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: `${id}`</li>
        <li class="list-group-item">Email: `${email}`</li>
        <li class="list-group-item">Extra: `${office}`</li>
      </ul>
    </div>
      
  </body>
  </html>
    </html>
    `;

  return html;
}

module.exports = { 
    
    createPage };
