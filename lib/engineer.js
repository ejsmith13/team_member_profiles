const Employee= require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)

        this.github= github
    }
    getGitHub(){
        console.log(`Github: github.com/${this.github}`)
        return `github.com/${this.github}`
    }
    getRole(){
        console.log("Role: Engineer")
        return "Engineer"

    }
    
}   

module.exports= Engineer