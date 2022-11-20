import {getIconNameByTestType, TestTypes} from "../../../../data/util";

export default function HistoryResultListPageTypeCheckbox(props) {
    const {text, testType, handleResultTypeChange} = props;
    return (
        <div className="list-group">
            <input type="checkbox" defaultChecked={true} onChange={handleResultTypeChange} id={testType} value={testType} />
            <label className={"list-group-item list-group-item-action testTypeCheckboxLabel"} htmlFor={testType}>
                <div
                    className="material-symbols-outlined icon">{getIconNameByTestType(testType)}
                </div>
                <div className={"resultType"}>{text}</div>
            </label>
        </div>
    )
}
