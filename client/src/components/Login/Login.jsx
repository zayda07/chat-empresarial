import React from "react";
import '../Login.css';

class Login extends React.Component{
    state={
        form:{
            username:"",
            password:""
        }
    }
    handleChange=e=>{
        this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    })
    }

    render(){
        return(
            <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      name ="username"
      <input type="password" placeholder="password"/>
      password="password"

      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="https://www.google.com/search?q=imagen+patron+de+chat+sin+derechos+de+autor&tbm=isch&ved=2ahUKEwj2uNeyw-PzAhWKCd8KHTFECokQ2-cCegQIABAA&oq=imagen+patron+de+chat+sin+derechos+de+autor&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1C24AJYv_gCYJqHA2gBcAB4AIABgwGIAZgHkgEDNi4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=sZF1YbacC4qT_AaxiKnICA&bih=757&biw=1440&rlz=1C1ALOY_esCO960CO960#imgrc=r1IBEUnD5CsCqM">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
     
      <button>login</button>
      <p class="message">Not registered? /<a href="https://www.google.com/search?q=imagen+patron+de+chat+sin+derechos+de+autor&tbm=isch&ved=2ahUKEwj2uNeyw-PzAhWKCd8KHTFECokQ2-cCegQIABAA&oq=imagen+patron+de+chat+sin+derechos+de+autor&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1C24AJYv_gCYJqHA2gBcAB4AIABgwGIAZgHkgEDNi4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=sZF1YbacC4qT_AaxiKnICA&bih=757&biw=1440&rlz=1C1ALOY_esCO960CO960#imgrc=r1IBEUnD5CsCqM">Create an account</a></p>
    </form>
  </div>
</div>
        )
    }

}
export default Login;