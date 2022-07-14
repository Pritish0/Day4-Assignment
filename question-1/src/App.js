import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    securityQuestion: "",
    securityAnswer: "",
    bio: ""
  })

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    securityQuestion: "",
    securityAnswer: "",
    bio: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let validForm = true;
    for (const item in formdata) {
      if(formdata[item]===""){
        validForm = false;
      }  
    }
    for (const item in error) {
      if(error[item]!==""){
        validForm = false;
      }  
    }
    setIsFormValid(validForm);
  },[formdata]); 

  const handleChange = (e) => {
    let newFormData = {...formdata};
    let newError = {...error};
    switch(e.target.name){
      case 'firstName':
        newFormData['firstName'] = e.target.value;
        if(!(/^[a-zA-Z]+$/.test(e.target.value))){
          newError['firstName'] = "Should only contain letters"
        }
        else if(!(e.target.value.length>=3 && e.target.value.length<=15)){
          newError['firstName'] = "Letter count should be between 3 and 15"
        }
        else{
          newError['firstName'] = ""
        }
        break;
      case 'lastName':
        newFormData['lastName'] = e.target.value;
        if(!(/^[a-zA-Z]+$/.test(e.target.value))){
          newError['lastName'] = "Should only contain letters"
        }
        else if(!(e.target.value.length>=3 && e.target.value.length<=15)){
          newError['lastName'] = "Letter count should be between 3 and 15"
        }
        else{
          newError['lastName'] = ""
        }
        break;
      case 'emailId':
        newFormData['emailId'] = e.target.value;
        if(e.target.value===""){
          newError['emailId'] = "Cannot be empty"
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))){
          newError['emailId'] = "Email should be in proper format"
        }
        else{
          newError['emailId'] = ""
        }
        break;
      case 'securityQuestion':
        newFormData['securityQuestion'] = e.target.value;
        if(e.target.value===""){
          newError['securityQuestion'] = "Required to select an option"
        }
        else{
          newError['securityQuestion'] = ""
        }
        break;
      case 'securityAnswer':
        newFormData['securityAnswer'] = e.target.value;
        if(e.target.value===""){
          newError['securityAnswer'] = "Cannot be empty"
        }
        else{
          newError['securityAnswer'] = ""
        }
        break;
      case 'bio':
        newFormData['bio'] = e.target.value;
        if(!(e.target.value.length>15)){
          newError['bio'] = "Letter count should be greater 15"
        }
        else{
          newError['bio'] = ""
        }
        break;
      default:
        console.log('error');

    }
    setError(newError);
    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
    setFormData({
      firstName: "",
      lastName: "",
      emailId: "",
      securityQuestion: "",
      securityAnswer: "",
      bio: ""
    });

  }

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      emailId: "",
      securityQuestion: "",
      securityAnswer: "",
      bio: ""
    });
    setError({
      firstName: "",
      lastName: "",
      emailId: "",
      securityQuestion: "",
      securityAnswer: "",
      bio: ""
    });
  }

  return (
    <div className="App">
      <br/>
      <br/>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="field-flexcontainer">
            <div className="inputfieldcontainer">
              <input type="text" placeholder="First Name" className="inputfield" name="firstName" value={formdata['firstName']} onChange={handleChange} />
              {error.firstName!=="" && <span className="error">{error.firstName}</span>}
            </div>
            <div className="inputfieldcontainer">
              <input type="text" placeholder="Last Name" className="inputfield" name="lastName" value={formdata['lastName']} onChange={handleChange} />
              {error.lastName!=="" && <span className="error">{error.lastName}</span>}
            </div>
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <input type="text" placeholder="Email Id" className="inputfield" name="emailId" value={formdata['emailId']} onChange={handleChange} />
            {error.emailId!=="" && <span className="error">{error.emailId}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <label className="fieldlabel">Security Question</label>
            <select
              className="inputfield" name="securityQuestion" value={formdata['securityQuestion']} onChange={handleChange} >
              <option value="" defaultValue>Select an option</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="What was the name of your first pet?">What was the name of your first pet?</option>
              <option value="What was the name of your first school?">What was the name of your first school?</option>
            </select>
            {error.securityQuestion!=="" && <span className="error">{error.securityQuestion}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <input type="text" placeholder="Security Answer" className="inputfield" name="securityAnswer" value={formdata['securityAnswer']} onChange={handleChange} />
            {error.securityAnswer!=="" && <span className="error">{error.securityAnswer}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <textarea placeholder="Bio" className="inputfield" style={{'height': '70px'}} name="bio" value={formdata['bio']} onChange={handleChange}/>
            {error.bio!=="" && <span className="error">{error.bio}</span>}
          </div>
          <br/>
          <button type="submit" className="btn" disabled={!isFormValid}>Submit</button> &nbsp; &nbsp;
          <button type="button" className="btn" onClick={clearForm}>Cancel</button>
        </form>
      </div>

    </div>
  );
}

export default App;
