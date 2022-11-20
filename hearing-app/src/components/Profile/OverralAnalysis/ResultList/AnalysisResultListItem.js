export default function AnalysisResultListItem(props) {
    const result = props.result;
    const selectedResultIds = props.selectedResultIds;
    const setSelectedResultsIds = props.setSelectedResultsIds;

    const handleCheckboxChange = (e) => {
        console.log('sbsb');
        if (e.target.checked) {
            setSelectedResultsIds([...selectedResultIds, result.id]);
        } else {
            setSelectedResultsIds(selectedResultIds.filter((id) => id !== result.id));
        }
    }

    return (
        <label htmlFor={result.id} className="resultItem list-group-item">
            <span className="material-symbols-outlined icon">music_note</span>
            <div className={"resultInfo"}>
                <div className={"resultDate"}>
                    {result.date}
                </div>
                <div className={"resultType"}>
                    {result.type}
                </div>
            </div>
            <div className={"resultScore"}>
                    {result.score.overall}
            </div>
            <input type="checkbox" onChange={handleCheckboxChange} id={result.id}></input>
        </label>
    )
}
