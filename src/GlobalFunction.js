import Constant from "./Constant";

const GlobalFunction = {
    logout(){
        localStorage.removeItem('lab_user_token');
        localStorage.removeItem('lab_user_email');
        localStorage.removeItem('lab_user_name');
        localStorage.removeItem('lab_user_photo');
        localStorage.removeItem('lab_user_role_id');
        window.location.href = Constant.font_url;
    }
}

export default GlobalFunction;