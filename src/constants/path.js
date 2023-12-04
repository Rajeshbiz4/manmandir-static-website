import Gallary from "../pages/gallary";
import Contact from "../pages/contact";
import Login from "../pages/login/login";
import Home from "../pages/home";


const paths = [

{
    login: {
        url : '/login',
        isPublic: false,
        Comment: <Home />
    },
    home: {
        url : '/',
        isPublic: true,
        Comment: <Home />
    },
    gallary: {
        url : '/login',
        isPublic: true,
        Comment: <Home />
    },
    login: {
        url : '/contact',
        isPublic: true,
        Comment: <Home />
    }
}
];

export default paths;
