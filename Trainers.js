// JavaScript to control the modal and show trainer information
function showTrainerInfo(trainerName) {
    const modal = document.getElementById('trainerModal');
    const trainerNameElement = document.getElementById('trainer-name');
    const trainerBioElement = document.getElementById('trainer-bio');

    // Example trainer data (can be replaced with dynamic data or fetched from an API)
    const trainers = {
        'Emma J.': 'Emma is a certified yoga instructor with 7 years of experience. She helps clients improve flexibility, posture, and mental well-being through yoga and pilates.',
        'Mike L.': 'Mike has over 10 years of experience in bodybuilding and strength training. He specializes in weightlifting and personal training for muscle gain and strength.',
        'Sophia G.': 'Sophia is an expert in high-intensity interval training (HIIT) and cardio. His workouts are designed to boost endurance and help with weight loss.',
        'Emily Parker': 'Emily is skilled in CrossFit and strength training. She focuses on improving overall fitness and endurance through functional exercises.',
        'Michael Brown': 'Michael has a background in aerobics and functional training. His sessions are fun, high-energy, and aimed at improving cardiovascular health.',
        'Sarah Wilson': 'Sarah is a mobility and flexibility coach. She works with clients to improve their range of motion, flexibility, and prevent injuries.'
    };

    // Set the content dynamically based on the trainer's name
    trainerNameElement.textContent = trainerName;
    trainerBioElement.textContent = trainers[trainerName] || 'Trainer information is not available at the moment.';

    // Show the modal
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('trainerModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('trainerModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};