
let _singleton = Symbol();
class CourseService {
    COURSE_API_URL ="http://localhost:8080/api/course";

    async findAllCourses() {
        try {
            const request = await fetch(this.COURSE_API_URL);
            return await request.json();
        } catch(e) {
            console.log(e)
        }
    }
     
    async createCourse(course){
        try{
            const request = await fetch(this.COURSE_API_URL,{
                method:"POST",
                mode: 'cors',
                body: JSON.stringify(course),
                headers: {
                    "content-type": "application/json"
                }
            });
            return await request.json();
        } catch(e){
            console.log(e)
        }
    }
    async deleteCourse(courseId){
        try{
            const request = await fetch(`${this.COURSE_API_URL}/${courseId}`,{
                method: "DELETE",
                mode:"cors"
            });
            return request;

        } catch (e){
            console.log("ERROR : ",e)
        }
    }

    async findCourseById(courseId){
        try{
            const request = await fetch(`${this.COURSE_API_URL}/${courseId}`);
            return await request.json();
        }catch(e){
            console.log("ERROR: ",e);
        }
    }
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

   static get instance() {
       if(!this[_singleton])
           this[_singleton] = new CourseService(_singleton);
       return this[_singleton]
   }  

}



export default CourseService;