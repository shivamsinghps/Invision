import React ,{useState,useEffect}from 'react'
import InputWiget from '../../components/Home/Widget/Widget'
import Logo from '../../components/UI/Logo/Logo'
import classes from './Home.module.css'
import SubmitModal from '../../components/UI/Modal'
import headerBackground from '../../images/Header.jpg'
import {connect} from 'react-redux'

const customers = ['shivam@gmail.com','shivamsinghps@gmail.com','nimir@unbunked.com','paarth@unbunked.com']

const Header = (props)=>{
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [modal,setModal] = useState(false)
  const [loaded,setLoaded] = useState(false)
  const [isCustomer,setIsCustomer] = useState(false)
  const [isValid, setIsValid] = useState(false);
  const emailpattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  useEffect(() => {
    setLoaded(true)
  },[]);

// Handling the input of textfield
  const changeHandler = (event) => {
     setEmail(event.target.value);
  }

  const changepassHandler = (event) => {
     setPass(event.target.value);
  }

// handling closing of modal & clearing the input field
  const handleModal = () => {
     setModal(false)
     setEmail("")
     setIsValid(false)
  }


// Handling submit and evaluating the email
  const submitHandler = (e) =>{
   e.preventDefault()

   setIsValid(emailpattern.test(email))
     setModal(true)

   if(customers.indexOf(email)!==-1)
   {
     setIsCustomer(true)
     setEmail("")
   }
}

const submitPassHandler = (e) =>{
 e.preventDefault()
    alert(`your password is ${pass}`)
   setPass("")
 }

let widgets = loaded? (
<div>
<Logo />
<InputWiget
iscustomer={isCustomer}
email={email}
submitHandler={submitHandler}
changeHandler={changeHandler}
submitPassHandler={submitPassHandler}
changepassHandler={changepassHandler}
password={pass}
/>
</div>
):null

// Creating the submitmodal
let submit = null
    if(email&&modal&&(isCustomer===false)){
      submit = <SubmitModal open={modal} valid={isValid} emailid={email} handleClose={handleModal} />
    }

  return(
    <header className={classes.Header} style={{backgroundImage: `url(${headerBackground}) `,right:props.side?'23vw':null}}>
        {submit}
        {widgets}
    </header>
  )
}

const mapStateToProps = state =>{
  return{
  side:state.ui.side
}}

export default connect(mapStateToProps)(Header)
