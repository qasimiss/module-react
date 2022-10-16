import "./form.scss";
import Button from "../button/button"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addNewUser } from "../../store/reducers/basket";


const Form = () => {

   const navigate = useNavigate();
   

    // const dispatch = useDispatch();

    const [form, setForm] = useState(true)

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
        let user = {
            login: login,
            password: password,
        }
        localStorage.setItem("user1", JSON.stringify(user))
        // dispatch(addNewUser(login, password))
    }


    const checkForm = (event) => {
        event.preventDefault()
        let person = JSON.parse(localStorage.getItem("user1"))
        if (person.login === login && person.password === password) {
            localStorage.setItem("auth", "1");
            navigate("../")
            // useEffect( () => {
            //     navigate("./") 
            // }, [])
            // useEffect(() => {
            //     redirect("./"), []});
            // <Navigate to="./" />
            // window.location.href = './'
        }
    }

    let changeForm = () => {
        setForm(!form)

    }
    useEffect( () => {
        console.log("Change form")
    }, [form])
    return (
        <>
            {form && <form action="" className="form">
                <span 
                onClick={ () => changeForm()} 
                className="form__span">
                    Авторизоваться
                </span>
                <h2 className="form__title">
                    Регистрация
                </h2>
                <input onChange={e => loginHandler(e)} value={login} onBlur={ e => blurHandler(e)} name = "login"  placeholder="Логин" type="text" className="form__input form__login" />
                {(loginDirty && loginError) && <div className="form__error error__login">{loginError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={ e => blurHandler(e)} name = "password" placeholder="Пароль" type="password" className="form__input form__password" maxLength={40} />
                {(passwordDirty && passwordError) && <div className="form__error error__password">{passwordError}</div>}
                <input type="checkbox" className="form__checkbox" id ="chek1"/>
                <label className="form__label" htmlFor="chek1">
                    Я согласен получать обновления на почту
                </label>
                <Button 
                    disabled ={!formValid} 
                    color="light" 
                    text = "Зарегистрироваться"
                    onClick = {sendForm}
                />
            </form>}


            {(!form) && <form action="" className="form">
                <span 
                onClick={ () => changeForm()} 
                className="form__span">
                    Зарегистрироваться
                </span>
                <h2 className="form__title">
                    Вход
                </h2>
                <input onChange={e => loginHandler(e)} value={login} onBlur={ e => blurHandler(e)} name = "login"  placeholder="Логин" type="text" className="form__input form__login" />
                {(loginDirty && loginError) && <div className="form__error error__login">{loginError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={ e => blurHandler(e)} name = "password" placeholder="Пароль" type="password" className="form__input form__password" maxLength={40} />
                {(passwordDirty && passwordError) && <div className="form__error error__password">{passwordError}</div>}
                <input type="checkbox" className="form__checkbox" id ="chek2"/>
                <label className="form__label" htmlFor="chek2">
                    Я согласен получать обновления на почту
                </label>
                <Button 
                    disabled ={!formValid} 
                    color="light" 
                    text = "Войти"
                    onClick = {checkForm}
                />
            </form>}
        </>
        
    )
}

export default Form;