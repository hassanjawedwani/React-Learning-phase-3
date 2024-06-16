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
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/posts")
        .then(resp => {
            resp.json().then(result =>{
                setData(result);
            });
        });
    }, []);
    return (
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
                        <td>{obj.title}</td>
                        <td>{obj.views}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
}

export default Api;