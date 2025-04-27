import { useLocation } from "react-router-dom";

export const loginWithGithub = () => {
    const clientId="Ov23liSxdWiDuvOJkn0T";
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`);
    
   
};