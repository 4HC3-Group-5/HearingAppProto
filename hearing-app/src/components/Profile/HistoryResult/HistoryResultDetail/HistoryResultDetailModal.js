import "./HistoryResultDetailModal.css";
import {HistoryResultDetailInfo1, HistoryResultDetailInfo2, HistoryResultDetailInfo3} from "./HistoryResultDetailInfo"
import {useContext} from "react";
import {AppContext} from "../../../../AppProvider";
import {results} from "../../../../data/fake_data";

export function HistoryResultDetailModal() {
    const all_Modal = [];
    for (let i = 0; i < results.length; i++) {
        const currentResult = results[i];
        const currentModalId = "Modal" + currentResult.id
        const currentModalLabel =  "Label" + currentResult.id
        all_Modal.push(
            <div className="modal fade" id={currentModalId} tabIndex="-1" aria-labelledby={currentModalLabel} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={currentModalLabel}>{currentResult.test_name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <HistoryResultDetailInfo1/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return all_Modal;
}

export function HistoryResultDetailModal1() {
    const all_Modal = [];
    for (let i = 0; i < results.length; i++) {
        const currentResult = results[i];
        const currentModalId = "Modal" + currentResult.id
        const currentModalLabel =  "Label" + currentResult.id
        all_Modal.push(
            <div className="modal fade" id="test1Modal" tabIndex="-1" aria-labelledby={currentModalLabel} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={currentModalLabel}>{currentResult.test_name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <HistoryResultDetailInfo1/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return all_Modal;
}
export function HistoryResultDetailModal2() {
    return (
        <div className="modal fade" id="test2Modal" tabIndex="-1" aria-labelledby="test2Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="test2Label">Test2</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <HistoryResultDetailInfo2/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function HistoryResultDetailModal3() {
    return (
        <div className="modal fade" id="test3Modal" tabIndex="-1" aria-labelledby="test3Label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="test3Label">Test3</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <HistoryResultDetailInfo3/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
