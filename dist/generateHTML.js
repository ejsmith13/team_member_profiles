

 
function createPage(name, id, email, role, school) {


  

  
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>${name}</h1>
      <p>${id}</p>
      <p>${email}</p>
      <p>${role}</p>
      <p>${school}</p>
  </body>
  </html>y>
    </html>
    `;

  return html;
}

module.exports = { 
    
    createPage };
