const Task = require("../Models/Task");

const getTasks = async (req,res) =>{
   const task = await Task.find();
   res.json(task);
};

const addTask = async (req,res) =>{
   const task = new Task(req.body);
   await task.save();
   res.json(task);
};


const updateTask = async (req,res) =>{
   const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new : true});
   res.json(task);
};


const deleteTask= async (req,res) =>{
   const task = await Task.findByIdAndDelete(req.params.id);
   res.json({message: "Tasks already Deleted"});
};


module.exports = {getTasks,addTask, updateTask, deleteTask};