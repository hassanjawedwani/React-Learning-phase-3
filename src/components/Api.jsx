// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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

const initialState = {
  user: "",
  views: "",
};

const Api = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const createPost = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("failed to create post, Error 201");
      }
      await updateTable();
    } catch (error) {
      console.error("Error occured: ", error);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await createPost();
    setFormData(initialState);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateTable = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw new Error("Failed to update table");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error occured: ", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      await updateTable();
    } catch (error) {
      console.error("Error occured: ", error);
    }
  };

  useEffect(() => {
    updateTable();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color="#000" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <table border={1} style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>_Id</th>
                <th>Name</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, index) => (
                <tr key={index}>
                  <td>{obj.id}</td>
                  <td>{obj.user}</td>
                  <td>{obj.views}</td>
                  <td>
                    <button type="button" onClick={() => deleteHandler(obj.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter user:"
                name="user"
                value={formData.user}
                onChange={inputHandler}
                required
              />
              <input
                type="number"
                placeholder="Enter no of views: "
                min="0"
                name="views"
                value={formData.views}
                onChange={inputHandler}
                required
              />
              <button type="submit">Add Data in Apis</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Api;
