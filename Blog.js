// Blog Data (Simulate database or server data)
const blogPosts = [
    {
        title: '5 Strength Training Tips for Beginners',
        content: 'Strength training is essential for building muscle and improving overall fitness. Start with lighter weights to focus on form, progressively increase the load, and maintain consistency for optimal results.'
    },
    {
        title: 'Nutrition: Fuel Your Fitness Journey',
        content: 'Proper nutrition is key to maximizing workout performance. Ensure a balanced diet of proteins, carbs, and fats, and stay hydrated throughout the day. Timing meals around workouts is crucial for recovery.'
    },
    {
        title: 'Top 5 HIIT Workouts for Fat Burning',
        content: 'High-Intensity Interval Training (HIIT) involves short bursts of intense exercise followed by rest. These workouts are great for fat burning and improving cardiovascular fitness. Try incorporating sprinting, cycling, or bodyweight exercises.'
    },
    {
        title: 'Yoga: A Mind and Body Workout',
        content: 'Yoga offers a unique combination of physical and mental benefits. It improves flexibility, builds strength, and reduces stress. Incorporating yoga into your routine can enhance both mental clarity and physical endurance.'
    },
    {
        title: 'The ultimate beginner guide to the gym',
        content: 'Dive into your fitness journey with confidence as we present "The Ultimate Beginner Guide to the Gym". Unlock the secrets to a seamless start, empowering you to navigate the gym floor, and kickstart your path to a healthier lifestyle.'
    },
    {
        title: 'Body transformation - Where to start',
        content: 'Embark on your transformative journey with clarity and purpose. Discover the perfect starting point for your body transformation, as we guide you through a personalized roadmap tailored to sculpting the best version of yourself.'
    },
    {
        title: 'Top 5 best natural energy boosting tips',
        content: 'Elevate your vitality with our top 5 natural energy-boosting tips. Unleash sustained vigor as we share simple, holistic strategies to invigorate your body and mind, ensuring you conquer each day with renewed strength and enthusiasm.'
    }
];

// Function to open the modal and display the blog content
function openModal(index) {
    const modal = document.getElementById('blogModal');
    const blogDetails = document.getElementById('blogDetails');
    const blog = blogPosts[index];

    blogDetails.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>
    `;
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};