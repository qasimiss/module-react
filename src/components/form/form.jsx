import "./form.scss";
import Button from "../button/button"
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addNewUser } from "../../store/reducers/basket";


const Form = () => {

    let span = "Авторизоваться"
    let title = "Регистрация"
    let buttonText = "Зарегистрироваться"

    // const dispatch = useDispatch();
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState("Логин не может быть пустым")
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым")
    const [formValid, setFormValid] = useState(false)

    useEffect( ()=> {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [loginError, passwordError])

    const loginHandler = (event) => {
        setLogin(event.target.value)
        if (event.target.value.length < 8) {
            setLoginError("Логин должен содержать не менее 8-ми символов")
            if (!event.target.value) {
                setLoginError("Логин не может быть пустым")
            }
        } else {
            setLoginError("")
        }

    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length < 8) {
            setPasswordError("Пароль должен содержать не менее 8-ми символов")
            if (!event.target.value) {
                setPasswordError("Пароль не может быть пустым")
            }
        } else {
            setPasswordError("")
        }
    }
    const blurHandler = (event) => {
        switch (event.target.name) {
            case "login" :
                    setLoginDirty(true)
                    break
            case "password" :
                    setPasswordDirty(true)
                    break
            default: break
        }
    }


    const sendForm = (event) => {
        event.preventDefault();
        let key = login
        let value = password
        localStorage.setItem(key, value)
        // dispatch(addNewUser(login, password))
    }

    return (
        <form action="" className="form">
            <span className="form__span">
                {span}
            </span>
            <h2 className="form__title">
                {title}
            </h2>
            <input onChange={e => loginHandler(e)} value={login} onBlur={ e => blurHandler(e)} name = "login"  placeholder="Логин" type="text" className="form__input form__login" />
            {(loginDirty && loginError) && <div className="form__error error__login">{loginError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={ e => blurHandler(e)} name = "password" placeholder="Пароль" type="password" className="form__input form__password" maxLength={40} />
            {(passwordDirty && passwordError) && <div className="form__error error__password">{passwordError}</div>}
            <input type="checkbox" className="form__checkbox" id ="chek"/>
            <label className="form__label" htmlFor="chek">
                Я согласен получать обновления на почту
            </label>
            <Button 
                disabled ={!formValid} 
                color="light" 
                text = {buttonText} 
                onClick = {sendForm}
            />
        </form>
    )
}

export default Form;