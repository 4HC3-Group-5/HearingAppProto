import {useContext, useState} from "react";
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import {TestTypes} from "../../../../data/util";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import SpatialAudioChart from "../AnalysisCharts/SpatialAudioChart";

export default function SpatialAudioAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username(user.name), TestTypes.SpatialAudio);
    const [selectedResultIds, setSelectedResultsIds] = useState([]);

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
