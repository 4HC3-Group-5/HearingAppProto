import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: true,
            text: "Chart.js Line Chart"
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [1,2,3,4,5,6,7],
        },
        {
            label: "Dataset 2",
            data: [1,2,3,4,5,6,7],
        }
    ]
};

const resultToDatasets = (result) => {
    const resultName = `${result.testType}#${result.id}`;
    return [

    ]
}

export default function PureToneChart(props) {
    const {results, selectedResultIds} = props;
    const selectedResults = results.filter((result) => selectedResultIds.includes(result.id));




    return <Line options={options} data={data} />;
}
