import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {

  const firstName = useRef();
  const lastName = useRef();
  const emailId = useRef();
  const securityQuestion = useRef();
  const securityAnswer = useRef();
  const bio = useRef();

  // const firstName_error = useRef();
  // const lastName_error = useRef();
  // const emailId_error = useRef();
  // const securityQuestion_error = useRef();
  // const securityAnswer_error = useRef();
  // const bio_error = useRef();

  // const [formdata, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   emailId: "",
  //   securityQuestion: "",
  //   securityAnswer: "",
  //   bio: ""
  // })

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    securityQuestion: "",
    securityAnswer: "",
    bio: ""
  });

  // const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   let validForm = true;
  //   for (const item in formdata) {
  //     if(formdata[item]===""){
  //       validForm = false;
  //     }  
  //   }
  //   for (const item in error) {
  //     if(error[item]!==""){
  //       validForm = false;
  //     }  
  //   }
  //   setIsFormValid(validForm);
  // },[formdata]); 

  // const handleChange = (e) => {
  //   let newFormData = {...formdata};
  //   let newError = {...error};
  //   switch(e.target.name){
  //     case 'firstName':
  //       newFormData['firstName'] = e.target.value;
  //       if(!(/^[a-zA-Z]+$/.test(e.target.value))){
  //         newError['firstName'] = "Should only contain letters"
  //       }
  //       else if(!(e.target.value.length>=3 && e.target.value.length<=15)){
  //         newError['firstName'] = "Letter count should be between 3 and 15"
  //       }
  //       else{
  //         newError['firstName'] = ""
  //       }
  //       break;
  //     case 'lastName':
  //       newFormData['lastName'] = e.target.value;
  //       if(!(/^[a-zA-Z]+$/.test(e.target.value))){
  //         newError['lastName'] = "Should only contain letters"
  //       }
  //       else if(!(e.target.value.length>=3 && e.target.value.length<=15)){
  //         newError['lastName'] = "Letter count should be between 3 and 15"
  //       }
  //       else{
  //         newError['lastName'] = ""
  //       }
  //       break;
  //     case 'emailId':
  //       newFormData['emailId'] = e.target.value;
  //       if(e.target.value===""){
  //         newError['emailId'] = "Cannot be empty"
  //       }
  //       else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))){
  //         newError['emailId'] = "Email should be in proper format"
  //       }
  //       else{
  //         newError['emailId'] = ""
  //       }
  //       break;
  //     case 'securityQuestion':
  //       newFormData['securityQuestion'] = e.target.value;
  //       if(e.target.value===""){
  //         newError['securityQuestion'] = "Required to select an option"
  //       }
  //       else{
  //         newError['securityQuestion'] = ""
  //       }
  //       break;
  //     case 'securityAnswer':
  //       newFormData['securityAnswer'] = e.target.value;
  //       if(e.target.value===""){
  //         newError['securityAnswer'] = "Cannot be empty"
  //       }
  //       else{
  //         newError['securityAnswer'] = ""
  //       }
  //       break;
  //     case 'bio':
  //       newFormData['bio'] = e.target.value;
  //       if(!(e.target.value.length>15)){
  //         newError['bio'] = "Letter count should be greater 15"
  //       }
  //       else{
  //         newError['bio'] = ""
  //       }
  //       break;
  //     default:
  //       console.log('error');

  //   }
  //   setError(newError);
  //   setFormData(newFormData);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {...error};
    let isFormValid = true;

    let firstNameValue = firstName.current.value;
    if(!(/^[a-zA-Z]+$/.test(firstNameValue))){
      newError['firstName'] = "Should only contain letters";
      isFormValid = false;
    }
    else if(!(firstNameValue.length>=3 && firstNameValue.length<=15)){
      newError['firstName'] = "Letter count should be between 3 and 15";
      isFormValid = false;
    }
    else{
      newError['firstName'] = ""
    }

    
    let lastNameValue = lastName.current.value;
    if(!(/^[a-zA-Z]+$/.test(lastNameValue))){
      newError['lastName'] = "Should only contain letters";
      isFormValid = false;
    }
    else if(!(lastNameValue.length>=3 && lastNameValue.length<=15)){
      newError['lastName'] = "Letter count should be between 3 and 15";
      isFormValid = false;
    }
    else{
      newError['lastName'] = ""
    }

    
    let emailIdValue = emailId.current.value;
    if(emailIdValue===""){
      newError['emailId'] = "Cannot be empty";
      isFormValid = false;
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailIdValue))){
      newError['emailId'] = "Email should be in proper format";
      isFormValid = false;
    }
    else{
      newError['emailId'] = "";
    }


    let securityQuestionValue = securityQuestion.current.value;
    if(securityQuestionValue===""){
      newError['securityQuestion'] = "Required to select an option";
      isFormValid = false;
    }
    else{
      newError['securityQuestion'] = ""
    }

    
    let securityAnswerValue = securityAnswer.current.value;
    if(securityAnswerValue===""){
      newError['securityAnswer'] = "Cannot be empty";
      isFormValid = false;
    }
    else{
      newError['securityAnswer'] = ""
    }

    
    let bioValue = bio.current.value;
    if(!(bioValue.length>15)){
      newError['bio'] = "Letter count should be greater 15";
      isFormValid = false;
    }
    else{
      newError['bio'] = ""
    }
  
    setError(newError);

    console.log(isFormValid);
    if(isFormValid){
      console.log({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        emailId: emailId.current.value,
        securityQuestion: securityQuestion.current.value,
        securityAnswer: securityAnswer.current.value,
        bio: bio.current.value
      });
      firstName.current.value = "";
      lastName.current.value = "";
      emailId.current.value = "";
      securityQuestion.current.value = "";
      securityAnswer.current.value = "";
      bio.current.value = "";
    }


  }

  const clearForm = () => {
    firstName.current.value = "";
    lastName.current.value = "";
    emailId.current.value = "";
    securityQuestion.current.value = "";
    securityAnswer.current.value = "";
    bio.current.value = "";

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
              <input type="text" placeholder="First Name" className="inputfield" ref={firstName} />
              {error.firstName!=="" && <span className="error">{error.firstName}</span>}
            </div>
            <div className="inputfieldcontainer">
              <input type="text" placeholder="Last Name" className="inputfield" ref={lastName} />
              {error.lastName!=="" && <span className="error">{error.lastName}</span>}
            </div>
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <input type="text" placeholder="Email Id" className="inputfield" ref={emailId} />
            {error.emailId!=="" && <span className="error">{error.emailId}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <label className="fieldlabel">Security Question</label>
            <select className="inputfield" ref={securityQuestion} >
              <option value="" defaultValue>Select an option</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="What was the name of your first pet?">What was the name of your first pet?</option>
              <option value="What was the name of your first school?">What was the name of your first school?</option>
            </select>
            {error.securityQuestion!=="" && <span className="error">{error.securityQuestion}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <input type="text" placeholder="Security Answer" className="inputfield" ref={securityAnswer} />
            {error.securityAnswer!=="" && <span className="error">{error.securityAnswer}</span>}
          </div>
          <br/>
          <div className="inputfieldcontainer">
            <textarea placeholder="Bio" className="inputfield" style={{'height': '70px'}} ref={bio} />
            {error.bio!=="" && <span className="error">{error.bio}</span>}
          </div>
          <br/>
          <button type="submit" className="btn">Submit</button> &nbsp; &nbsp;
          <button type="button" className="btn" onClick={clearForm}>Cancel</button>
        </form>
      </div>

    </div>
  );
}

export default App;
