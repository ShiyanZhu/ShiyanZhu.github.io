document. querySelector ('#flip-back')
    .addEventListener("click", function() {
        document.querySelector('a').classList.add('back');
        document.querySelector('a').classList.remove('front');
    });
