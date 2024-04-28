import { useState } from 'react'
import { useFrappeAuth } from 'frappe-react-sdk'

export const MyAuthComponent = () => {
    {/* Component styling */}
    const styles = {
        wrapper:  'flex w-[90vw] lg:w-[33vw] max-h-3/4 bg-primary rounded-[20px] px-4 md:px-20 py-14 flex-col flex-wrap overflow-y-clip',
        title: 'w-full text-white text-center text-xl mb-3',
        input: 'w-full bg-transparent border border-accent text-gray-text text-sm rounded-[10px] focus:outline-none px-2.5 py-2 my-3',
        submit: 'flex items-center justify-center bg-accent rounded-[10px] px-2.5 py-2 text-sm my-3',
        loginError:'text-danger my-3'
    }

    {/* State variables to store input username and password and display errors */}
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<any>('')

    const { login, isLoading } = useFrappeAuth()

    {/* Login function */}
    const onSubmit = () => {
        login({
            username: username,
            password: password,
        }).then(res => {
            setLoginError(undefined)
            window.location.reload()
        }).catch(err => {
            setLoginError(err)
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}> Login  </div>
            {loginError ? <span className={styles.loginError}>Invalid credentials</span> : null}
            <input type='text' className={styles.input} placeholder='Username' onChange={e => setUsername(e.target.value)}/>
            <input type='password' className={styles.input} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <button className={styles.submit} onClick={onSubmit}>
                {!isLoading ? 'Login' : 'Logging in...'}
            </button>
        </div>
    )
}