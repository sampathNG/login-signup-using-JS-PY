var readlineSync = require('readline-sync');
const fs = require('fs');
console.log("welcome to SAMPATH`login signup\n1 :- signup\n2 :- login")
var x = readlineSync.question("enter your choice  ")
if (x != 1 && x != 2){
    console.log("wrong choice entered try again")
}else{
    if(x == 1){
        var name = readlineSync.question('\nEnter Your Name: ')
        var username  = readlineSync.question("\nEnter a username:")
        var phone = readlineSync.question('\nEnter Your Phone number: ')
        var password  = readlineSync.question("\nEnter a password:")
        var password1 = readlineSync.question("\nEnter a Confirm password:")
        if (password == password1){
        var z = name.concat(".json")
        var k = [name,username,phone,password]
        fs.writeFile(z,k,(err)=>{
            if (err) {
                console.error(err)
                return
            }
        
            console.log('signup successfully')
        })
        }else{
            console.log("password unmatched")
        }
    }else{
        var login1 = readlineSync.question("enter your name  ")
        var login2 = readlineSync.question("enter your password  ")
        var b = login1.concat(".json")
        fs.readFile(b, (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            var i = data.toString()
            if (login1 == i[0] && login2 == i[-1]) {
                console.log("login successfull")
            }else{
                console.log("username or password incorrect")
            }
        })
    
    }
}



