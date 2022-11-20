import "./HistoryResultListPage.css";


import {HistoryResultDetailModal} from "../HistoryResultDetail/HistoryResultDetailModal"
import {AppContext} from "../../../../AppProvider";
import {useContext, useState} from "react";
import {results} from "../../../../data/fake_data"
import {
    HistoryResultDetailModal2,
    HistoryResultDetailModal3
} from "../HistoryResultDetail/HistoryResultDetailModal";
import HistoryResultListTable from "./HistoryResultListTable";
import {getIconNameByTestType, TestTypes} from "../../../../data/util";
import HistoryResultListPageTypeCheckbox from "./HistoryResultListPageTypeCheckbox";

function HistoryResultListPage() {
    const user = useContext(AppContext).user;
    const [selectedResultTypes, setSelectedResultTypes] = useState([TestTypes.PureTone, TestTypes.MaskedNoise, TestTypes.SpatialAudio]);

    const handleResultTypeChange = (e) => {
        const value = e.target.value;
        if (e.target.checked && !selectedResultTypes.includes(value)) {
            setSelectedResultTypes([...selectedResultTypes, value]);
        } else if (!e.target.checked && selectedResultTypes.includes(value)) {
            setSelectedResultTypes(selectedResultTypes.filter((type) => type !== value));
        }
    }

    return (
        <div className={"historyResultPage"}>
            <h2>{user.name}, this is your history result</h2>

            <div className={"historyResultPageResultTypeOptions"}>
                <HistoryResultListPageTypeCheckbox text={"Pure Tone"} testType={TestTypes.PureTone} handleResultTypeChange={handleResultTypeChange} />
                <HistoryResultListPageTypeCheckbox text={"Masked Noise"} testType={TestTypes.MaskedNoise} handleResultTypeChange={handleResultTypeChange} />
                <HistoryResultListPageTypeCheckbox text={"Spatial Audio"} testType={TestTypes.SpatialAudio} handleResultTypeChange={handleResultTypeChange} />
            </div>

            <HistoryResultListTable testTypes={selectedResultTypes} />
        </div>

    );
}

export default HistoryResultListPage;
