import { Link } from "react-router-dom";

const Jobs = () => {
    return (
        <div>
            <h1>Jobs</h1>
            <Link to="/jobs/webdevelopment">Web Development</Link> <br />
            <Link to="/jobs/appdevelopment">App Development</Link> <br />
            <Link to="/jobs/datascience">Data Science</Link> <br />
        </div>
    );
}

export default Jobs;
<br />