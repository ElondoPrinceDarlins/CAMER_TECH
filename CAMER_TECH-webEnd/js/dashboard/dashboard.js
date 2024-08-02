document.addEventListener('DOMContentLoaded', () => {
    const popularIssuesCtx = document.getElementById('popularIssuesChart').getContext('2d');
    const popularIssuesChart = new Chart(popularIssuesCtx, {
        type: 'bar',
        data: {
            labels: ['Device Crashing', 'Malware and Viruses', 'Slow Performance', 'Damaged Keyboard'],
            datasets: [{
                label: 'Issues',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const techniciansAvailabilityCtx = document.getElementById('techniciansAvailabilityChart').getContext('2d');
    const techniciansAvailabilityChart = new Chart(techniciansAvailabilityCtx, {
        type: 'pie',
        data: {
            labels: ['Malware', 'Device Crashing', 'Slow Device'],
            datasets: [{
                label: 'Technicians Availability',
                data: [60, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const popularIssuesCtx = document.getElementById('popularIssuesChart').getContext('2d');
    const popularIssuesChart = new Chart(popularIssuesCtx, {
        type: 'bar',
        data: {
            labels: ['Device Crashing', 'Malware and Viruses', 'Slow Performance', 'Damaged Keyboard'],
            datasets: [{
                label: 'Issues',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const techniciansAvailabilityCtx = document.getElementById('techniciansAvailabilityChart').getContext('2d');
    const techniciansAvailabilityChart = new Chart(techniciansAvailabilityCtx, {
        type: 'pie',
        data: {
            labels: ['Malware', 'Device Crashing', 'Slow Device'],
            datasets: [{
                label: 'Technicians Availability',
                data: [60, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
});
