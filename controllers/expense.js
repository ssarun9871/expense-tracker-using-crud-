const Expense = require('../models/expenses');

exports.postAddExpense=async (req,res,next)=>{
    
 await Expense.create({
    amount:req.body.amount,
    description:req.body.description,
    category: req.body.category,
    userId : req.body.userId
 })
 .then(result=> res.json(result.dataValues.id))//here the id is expense data id
 .catch(err => console.log(err));
}
 

exports.getDeleteExpense=async(req,res,next)=>{
    const id = req.params.id;
    console.log('controllers_expense = '+id)
    Expense.findByPk(id)
    .then(data=>{
        data.destroy();
        res.json(data);
    })
}


exports.getAllData = async(req,res,next)=>{
    const userId = req.body.userId
    
    Expense.findAll({where:{userId:userId}})
    .then(data=>{
        res.json(data)
    });
}