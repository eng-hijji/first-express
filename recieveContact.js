
 function makeContact(req,res){
  console.log('recived')
  let {name,email,message}=req.body;
  if(!name.trim()||!email.trim()||!message.trim()){
    return res.status(400).json({error:"missing data"})
  }
  return res.status(201).json({message:"thanks for contacting we consider you"})
}
module.exports = { makeContact };