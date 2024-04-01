var buttons = document.querySelectorAll('#animalNames button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var animalName = this.textContent.trim();
        var animalImages = document.querySelectorAll('#animalDetails img');
        animalImages.forEach(function(image) {
            var imageName = image.getAttribute('src').split('/').pop();
            if (imageName.includes(animalName)) {
                image.classList.add('active');
                image.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                image.classList.remove('active');
            }
        });
    });
});
