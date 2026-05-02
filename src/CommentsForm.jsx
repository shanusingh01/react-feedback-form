import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty!';
   } 
 
   return errors;
 };


export default function CommentsForm({addNewComment}) {

    // let [formData,setFormData] = useState({
    //     username:"",
    //     remark:"",
    //     rating:5
    // });

    const formik = useFormik({
        initialValues:{
            username:"",
            remark:"",
            rating:5   
        },
        validate, onSubmit: (values,{resetForm})=> {
            alert(JSON.stringify(values,null,2));
            addNewComment(values);   // 🔥 IMPORTANT
            resetForm();   
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData)=>{
    //         return {...currData, [event.target.name]:event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     event.preventDefault();
    //     addNewComment(formData);
    //     setFormData({
    //         username:"",
    //         remark:"",
    //         rating: 5
    //     });
    // }

    return(<div>
        <h4>Give a Comment!</h4>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="username">UserName :- </label>
            <input
            placeholder="Enter username"
            type="text"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
            />
            {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}

            <br/>

            <label htmlFor="remark"> Remarks :- </label>
            <textarea
            placeholder="Add few remarks"
            id="remark"
            value={formik.values.remark}
            onChange={formik.handleChange}
            name="remark"
            />

            <br/>

            <label htmlFor="rating">Rating :- </label>
            <input
            placeholder="Rating"
            id = "rating"
            type="number"
            min={1}
            max={5}
            value={formik.values.rating}
            onChange={formik.handleChange}
            name="rating"
            />

            <br/>
            <br/>

            <button type="submit">Add Comment</button>
        </form>
    </div>
    );
}