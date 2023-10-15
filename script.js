<script>
    // JavaScript code for the like button
    const likeButton = document.getElementById("like-button");
    let likes = 0;

    likeButton.addEventListener("click", function () {
        likes++;
        likeButton.textContent = `Like (${likes})`;
    });
</script>
