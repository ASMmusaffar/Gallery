function searchImages() {
    const category = document.getElementById('category').value;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images

    for (let i = 1; i <= 20; i++) { // Generate 20 random images
        const img = document.createElement('img');
        img.src = `https://source.unsplash.com/random/300x300/?${category}&${i}`; //unsplash random image url
        img.alt = category;
        img.classList.add('gallery-item');
        gallery.appendChild(img);
    }
}
