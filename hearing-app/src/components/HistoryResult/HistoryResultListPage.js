import "./HistoryResultListPage.css";
import {HistoryResultDetail1, HistoryResultDetail2, HistoryResultDetail3} from "./HistoryResultDetailPage"

function HistoryResultListPage() {
    return (
        <div>
            <h2>Username, this is your history result</h2>
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
                <tr>
                    <th scope="row">2022-09-26</th>
                    <td>Test1</td>
                    <td>Pure tone audiometry</td>
                    <td><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test1Modal" >Result</button> </td>
                </tr>
                <tr>
                    <th scope="row">2022-10-11</th>
                    <td>Test2</td>
                    <td>Masked noise test</td>
                    <td><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test2Modal" >Result</button> </td>
                </tr>
                <tr>
                    <th scope="row">2022-10-19</th>
                    <td>Test3</td>
                    <td>Spatial audio test</td>
                    <td><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test3Modal" >Result</button> </td>
                </tr>
                </tbody>
            </table>
            <HistoryResultDetail1/>
            <HistoryResultDetail2/>
            <HistoryResultDetail3/>
        </div>

    );
}

export default HistoryResultListPage;
