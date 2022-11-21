import './AnalysisResultList.css';

import {AppContext} from "../../../../AppProvider";
import {useContext, useState} from "react";
import AnalysisResultListItem from "./AnalysisResultListItem";

export default function AnalysisResultList(props) {
    const {results, selectedResultIds, setSelectedResultsIds} = props;

    return (
        <div className="analysisResultList list-group">
            {results.map((result) => (
                <AnalysisResultListItem key={result.id} result={result} selectedResultIds={selectedResultIds} setSelectedResultsIds={setSelectedResultsIds}/>
            ))}
        </div>
    );
}
