

function createCard(response) {
  const { name, id, email, role, office, school, github } = response;

  switch (role) {
    case "Manager":
      const managerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2>${name}</h2>
          <h3>${role}</h3>
        </div> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Office Number: ${office}</li>
        </ul>
      </div>`;
      return managerHTML;
    case "Engineer":
      const engineerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2>${name}</h2>
          <h3>${role}</h3>
        </div> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">Github: <a href=https://github.com/${github}>${github}</a> </li>
        </ul>
      </div>`;
      return engineerHTML;
    case "Intern":
      const internHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2>${name}</h2>
          <h3>${role}</h3>
        </div> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>`;
      return internHTML;
    default:
      return;
  }
}
function createPage(response) {
  
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

    <div class ="container">
      <div class="row">
        ${response}
      </div>
    </div>
        
    </body>
    </html>
      </html>
      `;
  
  return html;
}

module.exports = {
  createCard,
  createPage,
};
