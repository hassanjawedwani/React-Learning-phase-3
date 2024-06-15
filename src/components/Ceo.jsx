import { useLocation } from "react-router-dom";

const Ceo = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Hi from Ceo</h1>
        </div>
    );
}

export default Ceo;