let _singleton = Symbol();

class UserService {
    COURSE_API_URL ="http://localhost:8080";

    async login(user){
        try{
            const request = await fetch(`${this.COURSE_API_URL}/login`, {
                method:"POST",
                mode:"cors",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(user),
                credentials:"include"
            });
            if(request.status === 200){
                return await request.json();
            } else {
                throw new Error("Something went wrong, please try again");
            }
        } catch(e){
            console.log("ERROR!:",e)
        }
    }

    async register(userObj){
        try{
            const request = await fetch(`${this.COURSE_API_URL}/register`,
                {
                    method:"POST",
                    mode: "cors",
                    body: JSON.stringify(userObj),
                    headers:{
                        "Content-Type":"application/json"
                    },
                    "credentials": "include"
                });
            return await request.json();
        } catch (e){
            console.log("Error: ", e);
        }
    }

    async findAllUsers() {
        try{
        const response = await fetch(`${this.COURSE_API_URL}/api/user`);
        return await response.json();
        } catch(e){
            console.log('Error: ', e);
        }
    }

    deleteUser(id) {
        return fetch(`${this.COURSE_API_URL}/api/user/${id}`, {
            method: "DELETE",
        });
    }

   

    updateUser(user,id){
        return fetch(`${this.COURSE_API_URL}/api/user/${id}`, {
            method:"put",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user),
            credentials: 'include'
        });
    }

    async profile() { 
        const response = await fetch(`${this.COURSE_API_URL}/profile`, {
            'credentials': 'include'
        });
        return await response.json();
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
