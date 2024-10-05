// Sample data for dashboard
const data = {
    Region: ['North', 'South', 'East', 'West'],
    'Soil Moisture': [0.7, 0.5, 0.6, 0.8],
    'Precipitation': [120, 80, 90, 110],
    'Drought Index': [2.1, 1.5, 1.8, 2.3]
};

function showChart1() {
    const trace = {
        x: data.Region,
        y: data['Soil Moisture'],
        type: 'bar',
        marker: {
            color: data.Precipitation,
            colorscale: 'Viridis'
        }
    };
    const layout = {
        title: 'Soil Moisture vs Precipitation by Region',
        xaxis: { title: 'Region' },
        yaxis: { title: 'Soil Moisture' }
    };
    Plotly.newPlot('chart', [trace], layout);
}

function showChart2() {
    const trace = {
        x: data.Precipitation,
        y: data['Drought Index'],
        mode: 'markers',
        marker: {
            size: 12,
            color: data.Precipitation,
            colorscale: 'Jet'
        },
        text: data.Region
    };
    const layout = {
        title: 'Precipitation vs Drought Index',
        xaxis: { title: 'Precipitation (mm)' },
        yaxis: { title: 'Drought Index' }
    };
    Plotly.newPlot('chart', [trace], layout);
}

function showChart3() {
    const trace = {
        labels: data.Region,
        values: data['Soil Moisture'],
        type: 'pie'
    };
    const layout = {
        title: 'Soil Moisture Distribution by Region'
    };
    Plotly.newPlot('chart', [trace], layout);
}
