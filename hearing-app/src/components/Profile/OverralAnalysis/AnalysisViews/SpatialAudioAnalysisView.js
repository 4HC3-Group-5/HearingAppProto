import {useContext, useState} from "react";
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import {TestTypes} from "../../../../data/util";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import SpatialAudioChart from "../AnalysisCharts/SpatialAudioChart";
import {useSearchParams} from "react-router-dom";

export default function SpatialAudioAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username(user.name), TestTypes.SpatialAudio);

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
                <SpatialAudioChart results={results} selectedResultIds={selectedResultIds} />
            </div>
        </>
    )
}
