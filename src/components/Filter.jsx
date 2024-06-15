import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    return (
        <div>
            <h3>age:{ searchParams.get("age")}</h3>
            <h3>city:{ searchParams.get("city")}</h3>
            <input type="text" onChange={(e) =>{setSearchParams({age: e.target.value, city: "noida"})}}/>
            <button onClick={() => setSearchParams({age: 50, city: "pirmahal"})}>update</button><br/>
            <button type="button" onClick={()=>navigate('/about')}>Go to Filter page</button>
        </div>
    );
}

export default Filter;