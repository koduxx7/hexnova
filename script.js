<script>
document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.explore__card');
            card.classList.toggle('expanded');
        });
    });
});
</script>
