import {useContext, useState} from "react";
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import {TestTypes} from "../../../../data/util";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import MaskedNoiseChart from "../AnalysisCharts/MaskedNoiseChart";

export default function MaskedNoiseAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username(user.name), TestTypes.MaskedNoise);
    const [selectedResultIds, setSelectedResultsIds] = useState([]);

    return (

        <>
            <div className={'analysisLeft'}>
                <AnalysisResultList results={results} selectedResultIds={selectedResultIds} setSelectedResultsIds={setSelectedResultsIds} />
            </div>
            <div className={'analysisRight'}>
                <MaskedNoiseChart results={results} selectedResultIds={selectedResultIds} />
            </div>
        </>
    )
}
