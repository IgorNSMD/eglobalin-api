var express = require('express');
var Task = require('../models/task');
var Categoria = require('../models/categoria');

var router = express.Router();

/* GET /api/message */
router.get("/message", function (req, res, next) {
  res.json("Hello from the API!");
});

router.post("/categorias", function name(req, res, next) {
  const nombre = req.body.nombre;
  const decripcion = req.body.decripcion;
  const fechaCreacion = Date.now();

  var categoria = new Categoria({
    nombre: nombre,
    decripcion: decripcion,
    fechaCreacion: fechaCreacion
  });  

  categoria.save()
  .then(() => { 
    console.log(`Agrega nueva categoria ${nombre} - createDate ${fechaCreacion}`)  
    res.json(categoria)
    })
  .catch((err) => {
      console.log(err);
      res.send('No grabo registro....');
  });
  

})

/* GET /api/categorias */
router.get("/categorias", function (req, res, next) {
  // const datos = {
  //   "key1": "value1",
  //   "key2": "value2",
  //   "key3": "value3",
  //   "key4": 7,
  //   "key5": null,
  //   "favFriends": ["Kolade", "Nithya", "Dammy", "Jack"],
  //   "favPlayers": {"one": "Kante", "two": "Hazard", "three": "Didier"}
  // }

  // res.json(datos)
    
  Categoria.find().then((categorias) => {
    res.json(categorias)
  })


});

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find()
    .then((tasks) => {      
      const currentTasks = tasks.filter(task => !task.completed);
      const completedTasks = tasks.filter(task => task.completed === true);

      console.log(`Total tasks: ${tasks.length}   Current tasks: ${currentTasks.length}    Completed tasks:  ${completedTasks.length}`)
      res.render('index', { currentTasks: currentTasks, completedTasks: completedTasks });
    })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/addTask', function(req, res, next) {
  const taskName = req.body.taskName;
  const createDate = Date.now();
  
  var task = new Task({
    taskName: taskName,
    createDate: createDate
  });
  console.log(`Adding a new task ${taskName} - createDate ${createDate}`)

  task.save()
      .then(() => { 
        console.log(`Added new task ${taskName} - createDate ${createDate}`)        
        res.redirect('/'); })
      .catch((err) => {
          console.log(err);
          res.send('Sorry! Something went wrong.');
      });
});

router.post('/completeTask', function(req, res, next) {
  console.log("I am in the PUT method")
  const taskId = req.body._id;
  const completedDate = Date.now();

  Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now()})
    .then(() => { 
      console.log(`Completed task ${taskId}`)
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


router.post('/deleteTask', function(req, res, next) {
  const taskId = req.body._id;
  const completedDate = Date.now();
  Task.findByIdAndDelete(taskId)
    .then(() => { 
      console.log(`Deleted task $(taskId)`)      
      res.redirect('/'); }  )
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
});


module.exports = router;
