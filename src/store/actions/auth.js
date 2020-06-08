import * as actionTypes from './actionTypes'
import axios from 'axios'

export const auth_start = () =>{
	return {
		type:actionTypes.AUTH_START
	}
}

export const auth_success = (authtoken,authid) =>{
	return{
		type:actionTypes.AUTH_SUCCESS,
		token:authtoken,
		userId:authid
	}
}

export const auth_failure = (error) =>{
	return{
		type:actionTypes.AUTH_FAILURE,
		error:error
	}
}

export const authinit = (email,isSignup) =>{
	return dispatch => {
		dispatch(auth_start())
		const auth_init_data ={
			email:email,
			returnSecureToken:true
		}

		let url = 'the endpoint to verify token'
		if(isSignup)
		{
		 url = 'edpoint to get token'
		}

		axios.post(url,auth_init_data)
		.then(response=>{
		const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000))
		localStorage.setItem('token',response.data.idToken)
		localStorage.setItem('expirationDate',expirationDate)
		localStorage.setItem('userId',response.data.localId)
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

export const authinvalidate = (expiretime) =>{

	return dispatch=>{

	setTimeout(()=>{
	dispatch(authlogout())
	},expiretime * 1000)
	}
}

export const authlogout = () =>{
	localStorage.removeItem('token')
	localStorage.removeItem('expirationDate')
	localStorage.removeItem('userId')
	return{
		type:actionTypes.AUTH_LOGOUT
	}
}

export const authredirect = (path) =>{
	return{
		type:actionTypes.AUTH_REDIRECT_PATH,
		path:path
	}
}

//Asked by Nimir to get status from different tabs and devices
// Just pseudo code
export const checkauthstatus = () =>{
	return dispatch=>{
	const token = localStorage.getItem('token')
	if(!token)
	{
		dispatch(authlogout())
	}
	else{
		const expirationDate = new Date(localStorage.getItem('expirationDate'))
				if(expirationDate <= new Date())
		{
			dispatch(authlogout())
		}else{
			const userId = localStorage.getItem('userId')
			dispatch(auth_success(token , userId))

			dispatch(authinvalidate((expirationDate.getTime() - new Date().getTime())/1000))
		}
	}
	}
}
