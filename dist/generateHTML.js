// const Employee= require("./lib/employee")

 
function createPage(data) {
//   switch (data.role) {
//     case "manager":
//       return console.log("manager");
//     case "engineer":
//       return console.log("engineer");
//     case "intern":
//       return console.log("intern");
//   }


  const { name, id, email } = data;

  
  const html = `
    <html>
        <body>
            <h1>${name}</h1>
            <p>${id}</p>
            <p>${email}</p>
        </body>
    </html>
    `;

  return html;
}

module.exports = { 
    
    createPage };
