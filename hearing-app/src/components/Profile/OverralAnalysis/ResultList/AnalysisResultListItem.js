import {getIconNameByTestType} from "../../../../data/util";

export default function AnalysisResultListItem(props) {
    const result = props.result;
    const selectedResultIds = props.selectedResultIds;
    const setSelectedResultsIds = props.setSelectedResultsIds;

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setSelectedResultsIds([...selectedResultIds, result.id]);
        } else {
            setSelectedResultsIds(selectedResultIds.filter((id) => id !== result.id));
        }
    }

    const checked = selectedResultIds.includes(result.id);

    return (
        <label htmlFor={result.id} className="resultItem list-group-item">
            <span className="material-symbols-outlined icon">{getIconNameByTestType(result.type)}</span>
            <div className={"resultInfo"}>
                <div className={"resultDate"}>
                    {result.date}
                </div>
                <div>
                    <span className={"resultType"}>
                        {result.type}
                    </span>
                    <span className={"resultId"}>
                        #{result.id}
                    </span>
                </div>
            </div>
            <div className={"resultScore"}>
                    {result.score.overall}
            </div>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} id={result.id}></input>
        </label>
    )
}
