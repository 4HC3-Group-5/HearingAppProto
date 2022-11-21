
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import {useContext, useState} from "react";
import {TestTypes} from "../../../../data/util";
import PureToneChart from "../AnalysisCharts/PureToneChart";
import {useSearchParams} from "react-router-dom";

export default function PureToneAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username(user.name), TestTypes.PureTone);

    const [searchParams, setSearchParams] = useSearchParams();
    const resultIds = results.map((result) => result.id);

    let initialSelectedResultIds = [];

    let paramId = searchParams.get('id');
    if (paramId) {
        paramId = parseInt(paramId);
        if (resultIds.includes(paramId)) {
            initialSelectedResultIds = [paramId];
        }
    }

    const [selectedResultIds, setSelectedResultsIds] = useState(initialSelectedResultIds);


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
