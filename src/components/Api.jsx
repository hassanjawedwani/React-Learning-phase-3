// import { useEffect, useState } from "react"; 

import { useEffect, useState } from "react";


// const Api = () => {
//     const [apiData, setApiData]  = useState([]);
//     useEffect(()=>{
//         fetch("https://cat-fact.herokuapp.com/facts")
//         .then(result => {
//             result.json()
//             .then(resp => {
//                 setApiData(resp);
//             });
//         });
//     }, [])
//     return (
//         <table border={1}>
//             <thead>
//                 <tr>
//                     <th>_ID</th>
//                     <th>User</th>
//                     <th>Text</th>

//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     apiData.map((obj, index) => (
//                         <tr key={index}>
//                             <td>{obj._id}</td>
//                             <td>{obj.user}</td>
//                             <td>{obj.text}</td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </table>
//     )
// }

// export default Api;


// Get Request 

const Api = () => {
    const [data, setData] = useState([]);
    
    const [formData, setFormData]  = useState({ 
        user: '',
        views: 0
    });

    const updateApi = async() => {
        await fetch("http://localhost:3000/posts", {
            method: "Post",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formData)
        })
        updateTable();
    }

    const submitHandler = (event) => {
        event.preventDefault();
        updateApi();
    }

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData);
    }

    const updateTable = async() => {
        const result = await fetch("http://localhost:3000/posts").then(resp => resp.json().then(res => res));
        setData(result);
    }

    useEffect(()=>{
        updateTable();
    },[]);

    return (
        <div>
            <table border={1} style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>_Id</th>
                        <th>Name</th>
                        <th>Text</th>

                    </tr>
                </thead>
                <tbody>
                {
                    data.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.id}</td>
                            <td>{obj.user}</td>
                            <td>{obj.views}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter user:" name="user" onChange={inputHandler} required/>
                    <input type="number" placeholder="Enter no of views: " min="0" name="views" onChange={inputHandler} required/>
                    <button type="submit">Add Data in Apis</button>
                </form>
            </div>
        </div>
    );
}

export default Api;