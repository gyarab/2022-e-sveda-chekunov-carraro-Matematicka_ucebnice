import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/customBootstrap.scss'
import {SSRProvider} from "react-bootstrap";

function MyApp({Component, pageProps}) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    )
}

export default MyApp
