const inquirer= require("inquirer")

inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is your name?"
}).then((response) => {
    console.log(`Welcome ${response.name}`)
})