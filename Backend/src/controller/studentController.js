const db = require('../configure/db')

const getAllStudent = async (req, res)=>{
    try {
         let getAllStudent= await db.query("SELECT * FROM student");
        return res.status(200).json({
            success:true,
            message:'Get All Students...',
            result: getAllStudent[0]
        })
    } catch (error) {
        console.log({
            success:false,
            message:`${error}, Server Error!`
        });
    }
}


const createStudent = async (req, res)=>{
    try {
        let {name, email, age, course} = req.body;
        if(!name || !email || !age || !course){
            return res.status(404).json({success: false, message: "All Field Required..."})
        }
        
         let [existStudent] = await db.query(`SELECT * FROM student WHERE email = ?`,[email])
        
        //  console.log(existStudent)

        if(existStudent.length > 0){
            return res.status(404).json({success: false, message: "Please Enter other email... already existEmail..."})
        }

         await db.query(`INSERT INTO student (name, email, age, course) VALUES (?, ?, ?, ?)`,[name,email,age,course]);
        

        return res.status(201).json({success:true, message: "New Student Data Create..."})
        

    } catch (error) {
        console.log({success:false, message:`${error}, Server Error!`})
    }
}

module.exports = {getAllStudent, createStudent}