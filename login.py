print("Welcome to SAMPATH login signup\n1.Signup\n2,Login")
x = int(input("Enter your choicde number\n"))
if x == 1:
    name=input('\nEnter Your Name: ')
    username  = input("\nEnter a username:")
    phone=input('\nEnter Your Phone number: ')
    password  = input("\nEnter a password:")
    password1 = input("\nEnter a Confirm password:")
    if password == password1:
        try:
            file = open(username+".json", "r")
            data   = file.readline().split(':')
            if username in data[1] and password in data[-1]:
                print("\nUser already found")
                file.close()
        except:
            file = open(username+".json", "w")
            file.write(name+':'+username+':'+phone+":"+password)
            file.close()
            print('\nYou Successfully SignUp !')
    else: print("\nPasswords do NOT match !")
elif x == 2:
    login1 = input("\n UserName : ")
    login2 = input("\n PassWord : ")
    try:
        file = open(login1+".json", "r")
        data   = file.readline().split(':')
        if login1 in data[1] and login2 in data[-1]:
            print("\nLogin Succesfull Welcome")
            file.close()
    except:
        print('\nuser not found\ntry again')


