import React from 'react'


const Login=()=>{
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

	return(
		<div style={{display: "flex", marginTop: "5em", width: "200px", height: "200px"}}>
			<form action=""> 
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="username">Username</label>
					<input
                        style={{display: "flex", width: "400px"}}
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    /> 
				</div> 
        <br />
        <br />
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="passw">Password</label>
					<input
                        style={{display: "flex", width: "400px"}}
                        type="password"
                        name="passw"
                        id="passw"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    /> 
				</div>  
        <br />
        <br />
				<button style={{borderRadius: "8px", width: "100px", fontSize: "20px"}} type="submit">Login</button>
        <br />
        <br />
			</form>
		</div>
	)
}

export default Login    