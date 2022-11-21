
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import {useContext, useState} from "react";
import {TestTypes} from "../../../../data/util";
import PureToneChart from "../AnalysisCharts/PureToneChart";

export default function PureToneAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username(user.name), TestTypes.PureTone);
    const [selectedResultIds, setSelectedResultsIds] = useState([]);

    return (

        <>
            <div className={'analysisLeft'}>
                <AnalysisResultList results={results} selectedResultIds={selectedResultIds} setSelectedResultsIds={setSelectedResultsIds} />
            </div>
            <div className={'analysisRight'}>
                <PureToneChart results={results} selectedResultIds={selectedResultIds} />
            </div>
        </>
    )
}
