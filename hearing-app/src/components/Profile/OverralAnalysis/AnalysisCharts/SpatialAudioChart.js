import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from "chart.js";
import {Radar} from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
        }
    },
    scales: {
        r: {
            beginAtZero: true,
        }
    }
};

const resultToDatasets = (result) => {
    const resultName = `${result.type}#${result.id}`;
    const color1 = result.color;
    return [{
        label: resultName,
        data: Object.entries(result.data["0"]).map(([k, v]) => v),
        borderColor: color1,
    }]
}

export default function SpatialAudioChart(props) {
    const {results, selectedResultIds} = props;
    const selectedResults = results.filter((result) => selectedResultIds.includes(result.id));

    const labels = ["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285", "300", "315", "330", "345"];
    const datasets = selectedResults.flatMap(resultToDatasets);

    const data = {
        labels, datasets
    }

    return <Radar options={options} data={data}/>;
}
