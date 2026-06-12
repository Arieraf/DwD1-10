const postList = document.getElementById("postList");

const posts =
    JSON.parse(localStorage.getItem("posts")) || [];

renderUserPosts();

function renderUserPosts() {

    if (posts.length === 0) {

        postList.innerHTML =
            "<p>Belum ada postingan.</p>";

        return;
    }

    postList.innerHTML = "";

    posts.forEach(post => {

        const div =
            document.createElement("div");

        div.classList.add("post-item");

        div.innerHTML = `
            <p>${post.content}</p>

            <div class="timestamp">
                ${post.timestamp}
            </div>

            <div>
                 ${post.likes}
                &nbsp;&nbsp;
                 ${post.reply}
            </div>
        `;

        postList.appendChild(div);
    });
}