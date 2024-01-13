import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
            <h1>Welcome to</h1>
            <img src="img/minecraftitlogo2.png" alt="minecraft it logo">
            <img src="img/minecraftit_TXT_ONLY.png" alt="minecraft it logo text">
            <p >A place to share builds and build a community</p>
            <h2>Already a user? Log in below!</h2>
            <form action="/feed" method="POST">
                <label>Username:</label>
                <input
                    id="username" name="username" type="text" placeholder="username" required>
                <label>Password:</label>
                <input
                    type="password" id="password" name="password" placeholder="password" required>
                <button
                    type="submit">Log
                    In!</button>
            </form>

            <button><a href="signup.ejs">New? Sign up</a></button>
    </div>
  )
}
