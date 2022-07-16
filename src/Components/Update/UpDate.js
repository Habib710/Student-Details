import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Home/Home.css'

const UpDate = () => {
    const { id } = useParams();
    const [Student,setStudent]=useState([]);

    useEffect(() => {
        fetch(`
        https://student71.herokuapp.com/students/${id}`)
          .then((res) => res.json())
          .then((data) => setStudent(data))
      }, [id]);
      console.log(Student);

    const [updateRoll,setupdateRoll]=useState([]);
    const [updateClass,setupdateClass]=useState([]);
    const [updateResult,setupdateResult]=useState([]);
    const [updateURL,setupdateURL]=useState([]);

    const Updated={updateRoll,updateClass,updateResult,updateURL}

    const hendleUpRoll=event=>{
        const uproll=event.target.value;
        if(uproll){
            setupdateRoll(uproll)}; 
    }
    const hendleUpClass=event=>{
        const upclass=event.target.value;
        if(upclass){
            setupdateClass(upclass)}; 
    }
    const hendleUpResult=event=>{
        const upresult=event.target.value;
        if(upresult){
            setupdateResult(upresult)}; 
    }
    const hendleUpURL=event=>{
        const upURL=event.target.value;
        if(upURL){
            setupdateURL(upURL)}; 
    }

    const Onsubmit=event=>{ 
        event.preventDefault();
        
        if(!Updated){
            return alert("input plz")
        }
       

            const newupdate={Updated}
            fetch(`
            https://student71.herokuapp.com/students/${id}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
        
        
                    },body: JSON.stringify(newupdate)
                })
                .then(res=>res.json())
                .then(data=>{
                    setStudent(data);
                  
                });
                Swal.fire({
                    icon:'success',
                    title: 'Item Updated Sucessfuly ',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
    
        event.target.reset();
    }





    return (
        <div>
            <h1 className='text-center p-5'>Update Student Details</h1>
            <h3 className='text-center'>Student Name : {Student.name}</h3>

            <div className='form-div m-auto '>
            <form onSubmit={Onsubmit} className='update-div' >
                <label>Roll :</label><br />
                <input onBlur={hendleUpRoll} type="number" placeholder='Update Roll' /><br />
                <label>Class :</label><br />
                <input onBlur={hendleUpClass} type="number" placeholder='Update Class' /><br />
                <label>Result :</label><br />
                <input onBlur={hendleUpResult} type="text" placeholder='Update Result' /><br />
                <label>Picture :</label><br />
                <input onBlur={hendleUpURL} type="url" placeholder='Update Picture' /><br /><br />
                <input className='inputbtn-css' type="submit" value="Update Now"/><br />
            </form>
            </div>
            
        </div>
    );
};

export default UpDate;