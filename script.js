document.getElementById('about_me_link').addEventListener('click', function(event) {
    event.preventDefault(); 

    let aboutMeSection = document.getElementById('about_me_section');
    
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('dark_mode_link').addEventListener('click', function(event) {
    event.preventDefault();
    
    let aboutMeSection = document.getElementById('about_me_section');
    aboutMeSection.style.backgroundColor = '#27374D';
    aboutMeSection.style.color = 'white';
});
