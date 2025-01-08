fetch('premade/header.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
    });
fetch('premade/footer.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('footer').innerHTML = data;
    });