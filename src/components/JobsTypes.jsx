import { useParams } from "react-router-dom";

const JobsTypes = () => {
    const params = useParams();
    return (
        <div>
            <h1>{params.jobtype} myJobs</h1>
        </div>
    );
}

export default JobsTypes;