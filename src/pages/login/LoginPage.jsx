import './LogingPage.css'


export default function LoginPage() {
    return (
        <div className='alignment_box'>
            <div className='login_component'>
                <div className='main_component_login'>
                    <span>Login </span>
                    <input type="text" name="" id="" />
                </div>
                <div className='main_component_login'>
                    <span>Senha </span>
                    <input type="password" name="" id="" />
                </div>
                <button className="custom_buttons" type="submit"> enviar </button>
            </div>
        </div>
    )
}