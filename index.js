require("dotenv").config();
const express = require('express');
const app = express();
const Joi = require('joi');
const userRouter = require("./api/users/user.router");
const productRouter = require("./api/products/product.router");
const postRouter = require("./api/post/post.router");
const commentRouter = require("./api/comments/comment.router");
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
/*const courses=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];
app.get('/' , (req, res) => {
    res.send('hello world!!');

});
app.get('/api/courses' , (req, res) => {
    res.send(courses);

});
app.get('/api/courses/:id' , (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id was not found');
    res.send(course);

});
app.post('/api/courses', (req , res) =>{
    const {error} = validateCourse(req.body);

if (error) return res.status(400).send(result.error.details[0].message);
    return;

const course = {
    id: courses.length + 1 ,
    name: req.body.name
};
  courses.push(course);
  res.send(course);
});
app.put('/api/courses/:id' , (req, res) =>{
//look up the course
//if not exist 404
const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id was not found');

const {error} = validateCourse(req.body);

if (error) return res.status(400).send(result.error.details[0].message);
    

//update
course.name = req.body.name;
//return the updated course
res.send(course);


});

app.delete('/api/courses/:id', (req, res) =>{
//look out the course
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with given id was not found');

//delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

// return the same course
   res.send(course);

});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}*/
//const port = process.env.PORT || 3000 ;
//app.listen(port, () => console.log(`listening on port ${port}...`));
app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running on PORT:",process.env.APP_PORT);
});