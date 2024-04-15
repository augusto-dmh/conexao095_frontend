import React from "react";
import {GoogleLogin} from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"; //{jwtDecode} - funciona / jwt_decode - nao funciona
import FormComponent from "../components/FormComponent";
import styles from "../styles/login.module.css";

const Login = () => {
    return(
        <div className={styles.body}>
            <FormComponent />

            <div style={{marginBottom: "3vh", marginTop: "-3vh"}}> OU</div>
            <GoogleLogin 
            onSuccess={(credentialResponse) => {
                const credentialDecode = jwtDecode(credentialResponse.credential);
                console.log(credentialDecode)
            }}
            onError={() => { 
            console.log("login falied")
            }
        }
            />
        </div>
    )
}
export default Login