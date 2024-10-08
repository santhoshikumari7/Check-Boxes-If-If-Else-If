import React ,{useRef} from 'react'

function SignupForm() {
    
    let stateSelectRef = useRef();
    let msgeLabelRef = useRef();
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let ageInputRef = useRef();
    
    
    let selectedGender;
    let salutation;
    let maritalStatus;
    let languagesKnown = {
        eng:false,
        tel:false,
        hind:false,
        tam:false
    }

    let onClickSubmit = ()=>{
        if(selectedGender === "male"){
            salutation = "Mr."
        }else{
            if(maritalStatus === "single"){
               salutation = "Miss" 
            }else{
              salutation = "Mrs"
            }
        }

console.log(languagesKnown)

      msgeLabelRef.current.innerHtml = `${salutation} 
      ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value},your Account has been created Successfully and you know ${languagesKnown.eng === true?"English":""}
      ${languagesKnown.tel === true?"Telugu":""} ${languagesKnown.hind === true?"Hindhi":""}
      ${languagesKnown.tam === true?"Tamil":""}`
    }
  
  
    return (
    <div>
      <form>
        <h2>SignupForm</h2>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}></input>
        </div>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <div>
            <label>Age</label>
            <input ref={ageInputRef} onChange={()=>{
            let age = Number(ageInputRef.current.value);
            if(age <5){
                console.log(`Infant`)
            }else if(age >5 && age<=12){
                console.log(`Kid`)
            }else if(age >12 && age<=20){
                console.log(`Teen`)
            }else if(age >20 && age <= 30){
                console.log(`Young Age`)
            }else if (age >30 && age <= 45){
                console.log(`Middle Age`)
            }else if(age >45 && age <= 70){
                console.log(`Old Age`)
            }else{ 
                console.log(`not a valid value`)
            }
            }}></input>
        </div>
        <div>
            <label>Gender</label>
            <input type='radio' name='gender' ref={maleRBRef} onChange={()=>{
                if(maleRBRef.current.checked === true){
                    selectedGender = "male"
                }
            }}></input>
            <label className='innerlabel'>Male</label>
            <input type='radio'  name='gender' ref={femaleRBRef}
            onChange={()=>{
                if(femaleRBRef.current.checked === "true"){
                    selectedGender = "female"
                }
            }}
            
            ></input>
            <label  className='innerlabel'>Female</label>
            
            <div/>
            
            <div>
            <label>Marital Status</label>
            <input type='radio' name='ms' 
            onChange={(eventObj)=>{
              console.log(eventObj)
              if(eventObj.target.checked === true){
                maritalStatus = "single"
              }
            }}
            
            ></input>
            <label className='innerlabel'>Single</label>
            <input type='radio' name='ms'
            onChange={(eventObj)=>{
                if(eventObj.target.checked === true){
                    maritalStatus = "married"
                }
            }}
            
            ></input>

            <label className='innerlabel'>Married</label>
        </div>

        <div>
            <label>Languages Known</label>
            <input type='checkbox' onChange={(eo)=>{
          languagesKnown.eng = eo.target.checked;

                }}></input>
            <label className='innerlabel'>English</label>
            <input type='checkbox'
            onChange={(eo)=>{
                languagesKnown.eng = eo.target.checked;
      
                      }}></input>
            <label className='innerlabel'>Telugu</label>
            <input type='checkbox'
            onChange={(eo)=>{
                languagesKnown.eng = eo.target.checked;
      
                      }}></input>
            <label className='innerlabel'>Hindi</label>
            <input type='checkbox' onChange={(eo)=>{
          languagesKnown.eng = eo.target.checked;

                }}></input>
            <label className='innerlabel'>Tamil</label>
           
            
        </div>
        <label>State</label>
            <select ref={stateSelectRef}>
            <option>select state</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="TS">Telangana</option>
            <option value="TN">TamilNadu</option>
            <option value="KN">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharastra</option>
            <option value="GJ">Gujarat</option>
            <option value="NL">Nagaland</option>
            <option value="SK">Sikkim</option>
            </select>
            
        </div>
        <div>
        <button type='button'
        
        onClick={()=>{
            onClickSubmit();
        }}
        
        >Submit</button>
        </div>
        <label ref={msgeLabelRef} style={{width:"500px"}}></label>
      </form>
      
    </div>
  )
}

export default SignupForm
