const Employee= require('./employee');

class Manager extends Employee {
    constructor(response){
        const{name, id, email, office}= response

        super(name, id, email)

        this.office= office

    }
    getOffice(){
        console.log(`office: ${this.office}`)
        return this.office
    }
    getRole(){
        console.log ("Role: Manager")
        return "Manager"

    }
    
}  
module.exports= Manager