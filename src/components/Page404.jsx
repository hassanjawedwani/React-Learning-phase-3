import notFoundImage from '../assets/404.jpg'

const Page404 = () => {
    return (
        <div style={{width: "500px", margin: "auto", textAlign: "center"}}>
        <h1>Page404</h1>
        <img src={notFoundImage} alt="404 not found" style={{width: "100%", maxWidth: 500, height: "auto"}}/> 
        </div>
    );
}

export default Page404;
