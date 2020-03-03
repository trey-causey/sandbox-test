const xlabels = ["QMT","BP","EPA","CVCUFT","Skidpad","CurbW","BrakingDist","Acceleration"]
const quarterMileTime = [];
const basePrice = [];
const EPAmpg = [];
const CargoVolCUFT = [];
const Skidpad = [];
const Curbweight = [];
const BrakingDist = [];
const Acceleration = [];

async function chartIt() {

await getData();
const ctx = document.getElementById('myChart').getContext('2d');

const myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: xlabels,
        datasets: [
            {
            label: '1st Car Info',
            data: [quarterMileTime[0],basePrice[0],EPAmpg[0],CargoVolCUFT[0],Skidpad[0],Curbweight[0],BrakingDist[0],Acceleration[0]],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        },{
            label: '2nd Car Info',
            data: [quarterMileTime[1],basePrice[1],EPAmpg[1],CargoVolCUFT[1],Skidpad[1],Curbweight[1],BrakingDist[1],Acceleration[1]],
            backgroundColor: [
                'rgba(5, 99, 255, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1

        },{
            label: '3rd Car Info',
            data: [quarterMileTime[2],basePrice[2],EPAmpg[2],CargoVolCUFT[2],Skidpad[2],Curbweight[2],BrakingDist[2],Acceleration[2]],
            backgroundColor: [
                'rgba(5, 255, 5, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1

        },{
            label: '4th Car Info',
            data: [quarterMileTime[3],basePrice[3],EPAmpg[3],CargoVolCUFT[3],Skidpad[3],Curbweight[3],BrakingDist[3],Acceleration[3]],
            backgroundColor: [
                'rgba(255, 150, 150, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1

        }]
    },options: options = {
        scale: {
            pointLabels: {
                fontSize: 24
            },
            gridlines: {
                drawOnChartArea: false
            },
            angleLines: {
                display: true
                
                
            },
            ticks: {
                SuggestedMin: 0,
                SuggestedMax: 50,
                
            }
        }
        }
    
});
}