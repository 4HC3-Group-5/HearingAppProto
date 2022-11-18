export default function AnalysisResultItem(props) {
    const [result] = props;
    return (
        <div className="resultItem">
            <div className={"resultId"}>
                {result.id}
            </div>
            <div>
                <div>
                    {result.date}
                </div>
                <div>
                    {result.type}
                </div>
                <div>
                    {result.score.overall}
                </div>
            </div>
        </div>
    )
}
