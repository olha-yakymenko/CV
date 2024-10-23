const axios = require("axios")
class AccountService {
    authenticated = false;
  
    idUser = Math.floor(Math.random() * 10);
  
    user = null;
  
    constructor() {}
  
    // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
    getRandomLoginTime() {
      return (Math.floor(Math.random() * 10) % 5) + 5;
    }

    isAuthorizated(){
        return new Promise ((res) =>{
            setTimeout(() => {
            res(this.authenticated) 
        }, 1000);
    })
    }

    checkIsUserLogin(){
         const a = setInterval(() => {
            this.isAuthorizated().then(res =>{
                if(res){
                    console.log("Użytkownik jest zalogowany");
                    clearInterval(a);
                }
                else{
                    console.log("Użytkownik nie jest zalogowany");
                }
            })
        }, 1000);
    }
    loginUser(){
        return setTimeout(() => {
            this.authenticated=true
            console.log("Użytkownik został zalogowany")
            this.getUserDetails()
        }, this.getRandomLoginTime()*1000);
    }

    getUserDetails() {
        if (this.authenticated) {
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${this.idUser}`)
            .then(res => {
              this.user = res.data //ustanawliwajem usera na konkretnogo chela
              console.log(`Zostales zalogowany jako: ${res.data.name}`)
              this.getData()
            }).catch(er => console.log("Blad"))
        }
      }

    getData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(post => {
            const us = post.data.filter(p => p.userId === this.idUser)
            const com = us.map(post => axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`))
            Promise.all(com)
        .then(res => console.log(`Pobrano wpisy i komentarze użytkownika: ${this.user.name}`))
        .catch(er => console.log("Post error"))
        }).catch(er => console.log("Error"))
        
    }
    start(){
        this.checkIsUserLogin()
        this.loginUser()
    }
  }
  const accountService = new AccountService();
accountService.start();