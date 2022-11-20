
import {AppContext} from "../../../../AppProvider";
import {fakeServer} from "../../../../data/fake_server";
import AnalysisResultList from "../ResultList/AnalysisResultList";
import {useContext} from "react";
import {TestTypes} from "../../../../data/util";

export default function PureToneAnalysisView() {
    const user = useContext(AppContext).user;
    const results = fakeServer.filter_result_by_type(fakeServer.get_result_by_username("test"), TestTypes.PureTone);
    return (

        <>
            <div className={'analysisLeft'}>
                <AnalysisResultList testType={"Pure Tone"} results={results} />
            </div>
            <div className={'analysisRight'}>

            </div>
        </>
    )
}
