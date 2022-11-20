import {fakeServer} from "../../../../data/fake_server";
import {useContext} from "react";
import {AppContext} from "../../../../AppProvider";
import {getIconNameByTestType} from "../../../../data/util";
import {useNavigate} from "react-router-dom";

import './HistoryResultListTable.css';

export default function HistoryResultListTable(props) {
    const testTypes = props.testTypes;
    const user = useContext(AppContext).user;

    const userResults = fakeServer.get_result_by_username(user.name);
    const results = userResults.filter((result) => testTypes.includes(result.type));

    const navigate = useNavigate();

    return (<div className="historyListContainer">
        <div className="resultList list-group">
            {results.map((result) => (<div className="resultItem list-group-item list-group-item-action" onClick={() => {
                navigate(`/profile/history/${result.id}`)
            }}>
                <div className={"resultItemLeft"}>
                    <span
                        className="material-symbols-outlined icon">{getIconNameByTestType(result.type)}
                    </span>
                    <div className={"resultType"}>{result.type}</div>
                    <div className={"resultId"}>
                        #{result.id}
                    </div>
                    <div className={"resultDate"}>
                        {result.date}
                    </div>
                </div>
                <div className={"resultItemRight"}>
                    <div className={"resultScore"}>
                        {result.score.overall}
                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                </span>
                </div>
            </div>))}
        </div>
    </div>);
}
