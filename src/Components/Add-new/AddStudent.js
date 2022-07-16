import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Add.css';

const AddStudent = () => {

    const [name,setName]=useState([]);
    const [roll,setRoll]=useState([]);
    const [clas,setClass]=useState([]);
    const [result,setResult]=useState([]);
    const [type,setActivity]=useState([]);
    const [pic,setURL]=useState([]);
    const AddStudents={name,roll,clas,result,type,pic}
    

    const hendleName=event=>{
        const name=event.target.value;
        if(name){
        setName(name)};           
    }
    const hendleRoll=event=>{
        const roll=event.target.value;
        if(roll){
        setRoll(roll)};    
    }
    const hendleClass=event=>{
        const clas=event.target.value;
        if(clas){
        setClass(clas)};   
    }
    const hendleResult=event=>{
        const result=event.target.value;
        if(result){
            setResult(result)};   
    }
    const hendleActivityt=event=>{
        const activity=event.target.value;
        if(activity){
            setActivity(activity)};   
    }
    const hendleURL=event=>{
        const url=event.target.value;
        if(url){
            setURL(url)};   
    }

    const Onsubmit=event=>{ 
        event.preventDefault();
        
        if(!AddStudents){
            return alert("input plz")
        }
        

        const url=`https://student71.herokuapp.com/students`;
        fetch(url,{

            method:'POST',
            headers:{
                
                'content-type':'application/json'
            },
            body:JSON.stringify(AddStudents)
        })
        .then(res=>res.json())
        .then(data=>{
           
            Swal.fire({
                icon:'success',
                title: 'Item Added Sucessfuly ',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })

        event.target.reset();
    
      
        
    };

    return (
        <div>
            <h1 className='text-center p-5'>Add New Student</h1>
            <div className='form-div m-auto '>

          

           <form onSubmit={Onsubmit}>
            <label>Name :</label> <br />
            <input onBlur={hendleName} className='input-css' type="text" placeholder='Student name' /><br />
            <label>Roll :</label> <br />
            <input onBlur={hendleRoll} className='input-css' type="number" placeholder='Student Roll' /><br />
            <label>Class :</label> <br />
            <input onBlur={hendleClass}  className='input-css'type="number" placeholder='Student Class' /><br />
            <label>Result :</label> <br />
            <input onBlur={hendleResult} className='input-css' type="text" placeholder='Student Result' /><br />
            <label>Activty :</label> <br />
            <input onBlur={hendleActivityt} className='input-css' type="text" placeholder='Student activty' /><br />
            <label>Picture URL:</label> <br />
            <input onBlur={hendleURL} className='input-css' type="url" placeholder='Student Picture' /><br /><br />

            <input className='inputbtn-css ' type="submit" value='ADD NOW'/><br />


           </form>

           </div>
            
        </div>
    );
};

export default AddStudent;