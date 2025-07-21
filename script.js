function updateDateTime() {
    const now = new Date();
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    
    document.getElementById('currentDay').textContent = formattedDate;
    document.getElementById('currentTime').textContent = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 60000);