<script>
document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.querySelector('.profile');

    profileSection.addEventListener('click', () => {
        profileSection.style.backgroundColor = 'rgba(255, 105, 180, 0.3)'; 
        setTimeout(() => {
            profileSection.style.backgroundColor = 'rgba(255, 182, 193, 0.2)'; 
        }, 500);
    });
});
</script>
