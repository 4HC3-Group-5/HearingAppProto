import "./HistoryResultListPage.css";


import {
    HistoryResultDetailModal1,
    HistoryResultDetailModal2,
    HistoryResultDetailModal3
} from "./HistoryResultDetailModal"
import {AppContext} from "../../../AppProvider";
import {useContext} from "react";
import {results} from "../../../data/fake_data"

function HistoryResultListPage() {
    const user = useContext(AppContext).user;

    const result_rows = [];
    for (let i = 0; i < results.length; i++) {
        const currentResult = results[i];
        result_rows.push(
            <tr>
                <th scope="row">{currentResult.date}</th>
                <td>{currentResult.test_name}</td>
                <td>{currentResult.type}</td>
                <td>
                    <button className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#test1Modal">Result
                    </button>
                </td>
            </tr>
    );
    }
    return (
        <div>
            <h2>{user.name}, this is your history result</h2>
            <table className="table table-striped table-hover table-bordered result-table">
                <thead>
                <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">TEST NAME</th>
                    <th scope="col">TEST TYPE</th>
                    <th scope="col">FEEDBACK</th>
                </tr>
                </thead>
                <tbody>
                {result_rows}
                <tr>
                    <th scope="row">2022-10-11</th>
                    <td>Test2</td>
                    <td>Masked noise test</td>
                    <td>
                        <button className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#test2Modal">Result
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2022-10-19</th>
                    <td>Test3</td>
                    <td>Spatial audio test</td>
                    <td>
                        <button className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#test3Modal">Result
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <HistoryResultDetailModal1/>
            <HistoryResultDetailModal2/>
            <HistoryResultDetailModal3/>
        </div>

    );
}

export default HistoryResultListPage;
