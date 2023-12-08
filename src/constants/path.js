
import Home from "../pages/home";


const paths = [

    {

        home: {
            url: '/',
            isPublic: true,
            Comment: <Home />
        },
        gallary: {
            url: '/login',
            isPublic: true,
            Comment: <Home />
        },
        login: {
            url: '/contact',
            isPublic: true,
            Comment: <Home />
        }
    }
];

export default paths;
