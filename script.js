document.addEventListener("DOMContentLoaded", function() {
    const discoverBtn = document.getElementById('discover-btn');
    const infoSection = document.getElementById('info-section');
    function showInfo() {
        if (!infoSection) return;
        infoSection.style.display = 'block';
        infoSection.scrollIntoView({ behavior: 'smooth' });
        if (discoverBtn) discoverBtn.style.display = 'none';
    }

    if (discoverBtn) {
        discoverBtn.addEventListener('click', function() {
            showInfo();
        });
    }

    // If the page was opened with #info-section, reveal it
    if (window.location.hash === '#info-section') {
        showInfo();
    }

    // Handle hash changes (e.g., clicking Trends from another page)
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#info-section') showInfo();
    });
    });