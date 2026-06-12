const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const feedContainer = document.getElementById("feedContainer");
const errorText = document.getElementById("errorText");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

renderPosts();

postButton.addEventListener("click", createPost);

function createPost() {

    const content = postInput.value.trim();

    if (content === "") {
        errorText.textContent =
            "Postingan tidak boleh kosong!";
        return;
    }

    errorText.textContent = "";

     const newPost = {

        username: "Joe Noe",
        handle: "@joe noe",
        id: Date.now(),
        content: content,
        likes: 0,
        reply: 0,
        timestamp: new Date().toLocaleString()
    };

    posts.unshift(newPost);

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    renderPosts();

    postInput.value = "";
}

function renderPosts() {

    feedContainer.innerHTML = "";

    posts.forEach((post, index) => {

        const postElement =
        document.createElement("div");

        postElement.classList.add("post");

        postElement.innerHTML = 
        `
        
        <p>${post.username}</p>
        <p>${post.content}</p>

            <div class="timestamp">
                        ${post.timestamp}
            </div>

            <div>
                        likes ${post.likes}
                        reply ${post.reply}
          </div>

    <button onclick="deletePost(${post.id})">
        Delete
    </button>
`;

        feedContainer.appendChild(postElement);
    });
}

function deletePost(id) {

    posts = posts.filter(
        post => post.id !== id
    );

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    renderPosts();
}