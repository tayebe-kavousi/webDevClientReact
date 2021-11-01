let _singleton = Symbol();

class UserService {
    COURSE_API_URL ="http://localhost:8080/api/user";

    async login(user){
        try{
            const request = await fetch("http://localhost:8080/login", {
                method:"post",
                mode:"cors",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(user),
                credentials:"include"
            });
            return await request.json(); 
        } catch(e){
            console.log(e)
        }
    }

    async findAllUsers() {
        const response = await fetch(this.COURSE_API_URL);
        return await response.json();
    }

    deleteUser(id) {
        return fetch(`${this.COURSE_API_URL}/${id}`, {
            method: "DELETE",
        });
    }

   

    updateUser(user,id){
        return fetch(`${this.COURSE_API_URL}/${id}`, {
            method:"put",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include'
        });
    }

    async profile() { 
        const response = await fetch('/profile', {
            'credentials': 'include'
        });
        return await response.json();
    }

    register(userObj){
        return fetch("/register",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(userObj),
                "credentials": "include"
            }
        )
    }
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

   static get instance() {
       if(!this[_singleton])
           this[_singleton] = new UserService(_singleton);
       return this[_singleton]
   }  

}

export default UserService;
