(function () {

    const messages = [
        'Have a nice day! :)',
        'See you soon! :)',
        'Take care! :)',
    ]

    function getWish() {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
    const wish = document.querySelector('.wishes');
    wish.innerHTML = getWish();

})();