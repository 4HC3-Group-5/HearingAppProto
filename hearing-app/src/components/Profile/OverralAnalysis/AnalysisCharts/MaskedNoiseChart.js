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
import {Line} from "react-chartjs-2";
import {randomColor, shadeColor} from "../../../../data/util";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
        },
        scales: {
            xAxis: {
                type: 'logarithmic',
            },
            yAxis: {
                type: 'logarithmic',
            }
        }
    }
};

const resultToDatasets = (result) => {
    const resultName = `${result.type}#${result.id}`;
    const color1 = result.color;
    return [
        {
            label: resultName,
            data: Object.entries(result.data).map(([k, v]) => v),
            borderColor: color1,
        }
    ]
}

export default function MaskedNoiseChart(props) {
    const {results, selectedResultIds} = props;
    const selectedResults = results.filter((result) => selectedResultIds.includes(result.id));

    const labels = ["0", "10", "20", "30", "40", "50", "60", "70", "80"];
    const datasets = selectedResults.flatMap(resultToDatasets);

    const data = {
        labels,
        datasets
    }

    return <Line options={options} data={data}/>;
}
