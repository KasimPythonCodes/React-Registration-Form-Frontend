import "./Sign.css";
import React ,{useState} from 'react';
import Axios from 'axios';

function Registration() {

    const urlapi = "http://127.0.0.1:8000/user/api/"
    const [data ,  Setinputdata]=useState({
        first_name :"",
        last_name :"",
        email :"",
        password :"",
        confirm_password :""
        
    })
    
    

    function SaveSubmit(e){
        // if (data.password !==data.confirm_password){
        //     alert("kkkkkkkkkkkkkkkkkkkkkk")
        //     return <Registration/>
        // }
        e.preventDefault();
        // const res= await Axios.post(urlapi ,{
        Axios.post(urlapi ,{

            first_name :data.first_name,
            last_name :data.last_name,
            email :data.email,
            password :data.password,
            confirm_password :data.confirm_password

        });
        // if(res.data.password !==res.data.confirm_password){
        //     alert("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

        // }

    }

    function handle(e){
        const newdata ={...data}
        newdata[e.target.name]=e.target.value
        Setinputdata(newdata)
        console.log(newdata)
    }


    // const HandleSubmit =(e)=>{
    //     e.preventDefault();
    //     axios.postForm("http://localhost:8000/user/api/")
    //     .then((responce)=>{
    //         console.log(responce)
    //     })
    // }
   

    return (
        <>
       
    <div className="container">
    <div className="header">
        <h2>Registraion Form</h2>    
    </div>
    <form className="form"  onSubmit={(e)=>SaveSubmit(e)} >
   
        <div className="form-control">
        <label>First Name</label>
        <input type="text"  id="username" name="first_name" value={data.first_name} onChange={handle} required/>
        </div>
        
        <div className="form-control">
        <label>Last Name</label>
        <input type="text"  id="mobile" name="last_name" value={data.last_name} onChange={handle} required/>
        </div>
        
        <div className="form-control">
        <label>Email</label>
        <input type="text" placeholder="example@gmail.com" id="email" value={data.email} name="email"  onChange={handle} required />
        </div>
        
        <div className="form-control">
        <label>Password</label>
        <input type="Password" placeholder="Password" id="password" value={data.password} name="password" onChange={handle} required/>
        </div>
        
        <div className="form-control">
        <label>Confirm Password </label> 
        <input type="text" placeholder="Re-enter Password" id="password2" value={data.confirm_password} name="confirm_password" onChange={handle} required />
        </div>
        
        <button type="submit">Submit</button>
    </form>
    </div>


            </>
    );
}

export default Registration;