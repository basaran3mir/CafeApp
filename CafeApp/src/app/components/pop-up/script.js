document.addEventListener("DOMContentLoaded", function() {
    // Load carousel images
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            const carouselInner = document.getElementById('carousel-inner');
            const carouselIndicators = document.getElementById('carousel-indicators');

            images.forEach((image, index) => {
                // Create carousel item
                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.alt = image.alt;
                imgElement.className = 'd-block w-100';
                carouselItem.appendChild(imgElement);
                carouselInner.appendChild(carouselItem);

                // Create carousel indicator
                const indicator = document.createElement('li');
                indicator.setAttribute('data-target', '#bannerCarousel');
                indicator.setAttribute('data-slide-to', index);
                if (index === 0) {
                    indicator.className = 'active';
                }
                carouselIndicators.appendChild(indicator);
            });
        })
        .catch(error => console.error('Error loading images:', error));

    // Load and show popup
    fetch('popup.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
            return fetch('popup.json');
        })
        .then(response => response.json())
        .then(popupData => {
            document.getElementById('popupImage').src = popupData.imageSrc;
            document.getElementById('popupImage').alt = popupData.imageAlt;

            // Show the popup
            $('#popupModal').modal('show');

            // Add event listener for close button
            document.getElementById('closePopupButton').addEventListener('click', function() {
                $('#popupModal').modal('hide');
            });
        })
        .catch(error => console.error('Error loading popup:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});
