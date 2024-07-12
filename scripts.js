function orderOnline() {
    alert('Redirecting to the online ordering system...');
   
}
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reservation submitted!');

});
// page 5

showComment(currentCommentIndex);
let currentCommentIndex = 0;
const comments = document.querySelectorAll('.comment');

function showComment(index) {
    const carousel = document.querySelector('.comments-carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextComment() {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    showComment(currentCommentIndex);
}

function prevComment() {
    currentCommentIndex = (currentCommentIndex - 1 + comments.length) % comments.length;
    showComment(currentCommentIndex);
}


showComment(currentCommentIndex);
