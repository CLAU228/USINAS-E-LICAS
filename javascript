document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsDisplay = document.getElementById('comments-display');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('comment-name').value;
        const time = document.getElementById('comment-time').value;
        const text = document.getElementById('comment-text').value;

        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${name}</strong> (${time}):<br>${text}`;

        commentsDisplay.appendChild(comment);

        commentForm.reset();
    });
});