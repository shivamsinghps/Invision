// I  Have thought of 2 types of logic for authentication

//1. If we currently jsut wanna check for working feature of authentication then,
// Logic 1 is to sign the token at frontend=>send to mail in form of queryparams=>retrive the param and decode n validate
const token = jwt.sign(
            {
              email: user.email,
              userId: user._id
            },
            "SECRET",
            {
              expiresIn: "1h"
            }
          );

// send using send grid to mail upon accessing the mail user will redirect to our page then

const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "SECRET");
        req.userData = decoded;
        next();


// 2. If we need to create a placeholder for backend retrivals
// Logic two will use actions and dispatcher and will query backend

export const authinit = (email,password,isSignup) =>{
	return dispatch => {
		console.log({'email':email,'password':password})
		dispatch(auth_start())
		const auth_init_data ={
			email:email,
			password:password,
			returnSecureToken:true
		}

		let url = '[sign in URL]'
		if(isSignup)
		{
		 url = '[signup URL]'
		}

		axios.post(url,auth_init_data)
		.then(response=>{
		const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000))
		localStorage.setItem('token',response.data.idToken)
		localStorage.setItem('expirationDate',expirationDate)
		localStorage.setItem('userId',response.data.localId)
		console.log(response)
		dispatch(auth_success(response.data.idToken,response.data.localId))
		dispatch(authinvalidate(response.data.expiresIn))
		})
		.catch(err =>{
			const error_in = isSignup ? 'Signup' : 'SignIn'
			alert(`check your ${error_in} credentials`)
			dispatch(auth_failure(err))
		})
	}

}

// ignore the two url and isSignup it was a functionality asked by asked by Nimir
