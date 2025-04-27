import { useLocation } from "react-router-dom";
import { loginWithGithub } from "../gitApi/loginWithGithub";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
    // const [token, setToken]=useState();
    // const params = new URLSearchParams(useLocation().search);
    // const code = params.get("code");
    
    return(
        <main>
            <button onClick={loginWithGithub}>button</button>
            <div>
                {}
            </div>
        </main>
    );
}