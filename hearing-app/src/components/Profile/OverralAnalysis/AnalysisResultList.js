import {AppContext} from "../../../AppProvider";
import {useContext} from "react";
import AnalysisResultItem from "./AnalysisResultItem";
import {fakeServer} from "../../../data/fake_server";

export default function AnalysisResultList(props) {
    const [testType] = props;
    const user = useContext(AppContext);

    const userResults = user.name ? fakeServer.get_result_by_username(user.name) : fakeServer.get_result();
    const results = fakeServer.filter_result_by_type(userResults, testType);

    const [selectedResults, setSelectedResults] = useState([]);


    return (
        <div className="resultList">
            <h2>{testType}</h2>
            <div className="result-list-container">
                {results.map((result) => (
                    <AnalysisResultItem key={result.id} result={result}/>
                ))}
            </div>
        </div>
    );
}
