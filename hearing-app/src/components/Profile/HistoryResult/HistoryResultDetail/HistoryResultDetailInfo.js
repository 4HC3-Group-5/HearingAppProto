import "./HistoryResultDetailInfo.css";
import {useContext} from "react";
import {AppContext} from "../../../../AppProvider";
import {Link, useParams} from 'react-router-dom';
import {fakeServer} from "../../../../data/fake_server";

export function HistoryResultDetailInfo() {
    const user = useContext(AppContext).user;
    let {id} = useParams();
    const resultInfo = fakeServer.get_result_by_id(id);
    console.log(resultInfo);
    const score = resultInfo.score.overall;
    const originalScore = 40;
    const increasedScore = score - originalScore;
    const targetScore = 80;
    const degree = (score / 100.0) * 180.0;
    const percentageStyle = {
        transform: `rotate(${degree}deg)`
    }

    let gaugeStyle;
    if (degree <= 50) {
        gaugeStyle = {
            backgroundColor: "#AA2222FF"
        }
    } else if (degree >= 80) {
        gaugeStyle = {
            backgroundColor: "#5cb85c"
        }
    } else {
        gaugeStyle = {
            backgroundColor: "#ffc107"
        }
    }


    return (
        <div className="resultInfoPage">
            <div>
                <h4>Current User: {user.name}</h4>
                <div className="gauge1" style={gaugeStyle}>
                    <div className="percentage1" style={percentageStyle}></div>
                    <div className="mask1"></div>
                    <span className="value1">{score}</span>
                </div>
                <div className="text-center">Score</div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div> Original Score</div>
                        <div>{originalScore}</div>
                    </div>
                    <div className="col">
                        <div> Score Increased</div>
                        <div>{increasedScore}</div>
                    </div>
                    <div className="col">
                        <div> Target Score</div>
                        <div>{targetScore}</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4 text-center">
                    Your Score
                    <div className="text-center">{score}</div>
                </div>
                <div className="col-8">
                    You achieved better score from last time, it is still worse than the score of
                    you age group
                </div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Left ear
                            </div>
                            <div className="card-body">
                                30
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Right ear
                            </div>
                            <div className="card-body">
                                50
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear age
                            </div>
                            <div className="card-body">
                                70
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear type
                            </div>
                            <div className="card-body">
                                Right-preferred
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="rightEndButton"><Link to="/profile/history">
                <button type="button" className="btn btn-primary">Return</button>
            </Link></div>


        </div>
    );
}

export function HistoryResultDetailInfo1() {
    return (
        <div>
            <div>
                <h4>Current User: Username</h4>
                <div className="gauge1">
                    <div className="percentage1"></div>
                    <div className="mask1"></div>
                    <span className="value1">46</span>
                </div>
                <div className="text-center">Score</div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div> Original Score</div>
                        <div>40</div>
                    </div>
                    <div className="col">
                        <div> Score Increased</div>
                        <div>6</div>
                    </div>
                    <div className="col">
                        <div> Target Score</div>
                        <div>50</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4 text-center">
                    Your Score
                    <div className="text-center">46</div>
                </div>
                <div className="col-8">
                    You achieved better score from last time, it is still worse than the score of
                    you age group
                </div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Left ear
                            </div>
                            <div className="card-body">
                                30
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Right ear
                            </div>
                            <div className="card-body">
                                50
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear age
                            </div>
                            <div className="card-body">
                                70
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear type
                            </div>
                            <div className="card-body">
                                Right-preferred
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function HistoryResultDetailInfo2() {
    return (
        <div>
            <div>
                <h4>Current User: Username</h4>
                <div className="gauge2">
                    <div className="percentage2"></div>
                    <div className="mask2"></div>
                    <span className="value2">73</span>
                </div>
                <div className="text-center">Score</div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div> Original Score</div>
                        <div>60</div>
                    </div>
                    <div className="col">
                        <div> Score Increased</div>
                        <div>13</div>
                    </div>
                    <div className="col">
                        <div> Target Score</div>
                        <div>75</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4 text-center">
                    Your Score
                    <div className="text-center">73</div>
                </div>
                <div className="col-8 ">
                    You achieved better score from last time, it is still worse than the score of
                    you age group
                </div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Left ear
                            </div>
                            <div className="card-body">
                                <div className="card-title">30</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Right ear
                            </div>
                            <div className="card-body">
                                <div className="card-title">50</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear age
                            </div>
                            <div className="card-body">
                                <div className="card-title">70</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear type
                            </div>
                            <div className="card-body">
                                <div className="card-title">Right-preferred</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export function HistoryResultDetailInfo3() {
    return (

        <div>
            <div>
                <h4>Current User: Username</h4>
                <div className="gauge3">
                    <div className="percentage3"></div>
                    <div className="mask3"></div>
                    <span className="value3">90</span>
                </div>
                <div className="text-center">Score</div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div> Original Score</div>
                        <div>90</div>
                    </div>
                    <div className="col">
                        <div> Score Increased</div>
                        <div>0</div>
                    </div>
                    <div className="col">
                        <div> Target Score</div>
                        <div>90</div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-4 text-center">
                    Your Score
                    <div className="text-center">90</div>
                </div>
                <div className="col-8">
                    You achieved the same score from last time, it is the average score from your
                    age group. Nice job!
                </div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Left ear
                            </div>
                            <div className="card-body">
                                <div className="card-title">30</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Right ear
                            </div>
                            <div className="card-body">
                                <div className="card-title">50</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear age
                            </div>
                            <div className="card-body">
                                <div className="card-title">70</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Ear type
                            </div>
                            <div className="card-body">
                                <div className="card-title">Right-preferred</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
