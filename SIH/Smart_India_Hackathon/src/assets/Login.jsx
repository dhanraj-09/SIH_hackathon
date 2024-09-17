import {useState} from "react";
import styled from "styled-components";




function Login()
{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
    }

    const LABEL1=styled.label`

        height: 100px;
        width: 100px;
        padding: 10px;
    `;
    const LABEL2=styled.label`

        height: 100px;
        width: 100px;
        padding: 10px;
    `;
    const INPUT1=styled.input``;
    const INPUT2=styled.input``;
    const DIV1=styled.div`
    
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    return (
        <div>
            <form onSubmit={handleLogin}>
                <DIV1>
                    <div>
                        <LABEL1>LOG IN</LABEL1>
                        <INPUT1 type={"email"} placeholder={"abc123@gmail.com"} value={email}
                                // onChange={(e) => {
                                //     e.target.value
                                // }}
                        />
                    </div>
                    <div>
                        <LABEL2>PASSWORD</LABEL2>
                        <INPUT2 type={"password"} value={password} onchange={(e) => {
                            e.target.value;
                        }}/>
                    </div>
                </DIV1>
            </form>
        </div>
    )
}

export default Login;




























