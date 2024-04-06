const express = require('express')
const router = express.Router()
const MenuItem = require('../models/MenuItem')


router.post('/',async(req,res)=>{
  try{
    const data=req.body
    const newMenu = new MenuItem(data)
    const response =await newMenu.save()
    console.log('data saved')
    res.status(200).json(response)
  }
  catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
  }
})

router.get('/',async(req,res)=>{
  try{
      const data = await MenuItem.find()
      console.log('data fetched')
      res.status(200).json(data)
  }
  catch{
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
  }
})

//update 
router.put('/:id',async(req,res)=>{
  try{
      const personId =req.params.id // Extract the id from the url parameter
      const updatedPersonData = req.body

      const response = await MenuItem.findByIdAndUpdate(personId,updatedPersonData,{
        new:true,
        runValidators:true,
      })
      if(!response){
        return res.status(404).json({error:'Person not found'})
      } 

      console.log('data updated')
      res.status(200).json(response)

  }
  catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
  }
})

//delete
router.delete('/:id',async(req,res)=>{
  try{
      const menuId =req.params.id // Extract the id from the url parameter
    
      const response = await MenuItem.findByIdAndDelete(menuId)
      if(!response){
        return res.status(404).json({error:'Menu not found'})
      } 

      console.log('data deleted')
      res.status(200).json({message: 'deleted successfully'})

  }
  catch(err){
    console.log(err)
    res.status(500).json({error: 'Internal Server Error'})
  }
})


module.exports = router
