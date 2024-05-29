'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import { defaults } from "chart.js";

// Set the global default font family
defaults.font.family = "var(--font-taviraj)";
defaults.font.size = "10px";
defaults.borderColor = '#FFFFFF33'
defaults.color = '#FFFFFF33'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const sizes = {
    width: 96,
    heigth: 100,
};

export const options = {
    responsive: true,
    animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: false
        }
    },
    plugins: {
        legend: {
            position: 'bottom',
            display: true,
            labels: {
                font: {
                    size: 12,
                    family: 'var(--font-taviraj)',
                    style: 'italic',
                    weight: 'bold',
                },
                color: '#FFFFFF33',
                padding: 20,
                boxWidth: 20,
                boxHeight: 10,
                usePointStyle: true, // For circular legend boxes
                // pointStyle: 'circle' // Shape of the legend box
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        scales: {
            x: {
                grid: {
                    color: '#FFFFFF33', // Custom color for x-axis grid lines
                },
            },
            y: {
                grid: {
                    color: '#FFFFFF33', // Custom color for y-axis grid lines
                },
                min: -100,
                max: 100,
                ticks: {
                    stepSize: 20
                }
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const randoms = [10, 20, -10, -20, 30, -30, 40, -50, 50, -40]

export const data = {
    labels,
    datasets: [
        {
            label: 'Product 1',
            data: randoms,
            borderColor: 'rgb(255,255,255)',
            backgroundColor: 'rgba(255,255,255,1)',
        },
        {
            label: 'Product 2',
            data: randoms.map((i) => i * 2),
            borderColor: '#F47C20',
            backgroundColor: '#F47C20',
        },
        {
            label: 'Product 3',
            data: randoms.map((i) => i * 3),
            borderColor: '#FFE9A6',
            backgroundColor: '#FFE9A6',
        },
    ],
};

const ChartComponent = () => {

    return (
        <div className="chart-container w-full h-full bg-transparent mx-auto">
            <Line

                options={options}
                data={data}
            />
        </div>
    )
}

export default ChartComponent;