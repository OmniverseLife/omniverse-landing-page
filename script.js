document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('main-card');

    // Smooth 3D tilt effect logic (parallax)
    document.addEventListener('mousemove', (e) => {
        // Only apply effect on non-touch devices
        if (window.innerWidth > 768) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

            card.style.transform = `translateY(0) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Reset rotation smoothly
    document.addEventListener('mouseleave', () => {
        card.style.transform = `translateY(0) rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    // Remove transition when moving for instant snappiness

});
