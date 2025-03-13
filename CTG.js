function generateTicket() {
    const name = document.getElementById('name').value || 'Attendee Name';
    const email = document.getElementById('email').value || 'email@example.com';
    const track = document.getElementById('track').value;
    
    // Update ticket content
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewTrack').textContent = `Track: ${track.charAt(0).toUpperCase() + track.slice(1)}`;

    // Update track icon
    const icons = {
        tech: 'fa-microchip',
        design: 'fa-palette',
        business: 'fa-briefcase',
        startup: 'fa-rocket'
    };
    document.querySelector('.ticket-icon').className = `fas ${icons[track]} ticket-icon`;
}

// Color picker functionality
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        const color = option.dataset.color;
        document.documentElement.style.setProperty('--primary-color', color);
        document.querySelector('.ticket-preview').style.borderColor = color;
    });
});

// Real-time updates
document.getElementById('name').addEventListener('input', generateTicket);
document.getElementById('email').addEventListener('input', generateTicket);
document.getElementById('track').addEventListener('change', generateTicket);