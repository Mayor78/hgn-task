document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const time = now.toISOString().split('T')[1].split('.')[0];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        document.getElementById('currentTime').textContent = time;
        document.getElementById('currentDay').textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000); 
});
