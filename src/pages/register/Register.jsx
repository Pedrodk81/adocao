import react, { Component } from "react";
import './Signup.css'

export default class Register extends Component {
    render() {
        return (
            <>
                <div className="signup_component">

                    <form action="" method="post" className="formulario">
                        <label > Nome </label>
                        <input type="text" name=""  id="name"/>

                        <label > Sobrenome </label>
                        <input type="text" name="" id="sobrenome"/>

                        <label >Email </label>
                        <input type="email" name="" id="email" />

                        <label >Confirmar Email</label>
                        <input type="email" name="" id="confirm_email" />

                        <label >Senha</label>
                        <input type="password" name="" id="senha" />

                        <label >Confirmar Senha</label>
                        <input type="password" name="" id="confirm_senha" />

                        <label >RG </label>
                        <input type="text" name="" id="rg" />
                        
                        <label >CPF</label>
                        <input type="text" name="" id="cpf" />

                        <button className="custom_buttons" type="submit"> Enviar </button>
                    </form>
                </div>
            </>
        )
    }

}