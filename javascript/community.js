// Scroll to a specific section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Load posts and stories from local storage
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let stories = JSON.parse(localStorage.getItem("stories")) || [];

// Render posts
function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = posts
    .map(
      (post) => `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `
    )
    .join("");
}

// Render stories
function renderStories() {
  const storiesContainer = document.getElementById("storiesList");
  storiesContainer.innerHTML = stories
    .map(
      (story) => `
      <div class="story">
        <h3>${story.title}</h3>
        <p>${story.content}</p>
      </div>
    `
    )
    .join("");
}

// Handle post form submission
document.getElementById("postForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  posts.push({ title, content });
  localStorage.setItem("posts", JSON.stringify(posts));

  renderPosts();
  document.getElementById("postForm").reset();
});

// Handle story form submission
document.getElementById("storyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("storyTitle").value;
  const content = document.getElementById("storyContent").value;

  stories.push({ title, content });
  localStorage.setItem("stories", JSON.stringify(stories));

  renderStories();
  document.getElementById("storyForm").reset();
});

// Initial render
renderPosts();
renderStories();

// Open video in modal
function openVideo(videoUrl) {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = videoUrl;
  modal.style.display = "flex";
}

// Close video modal
function closeVideo() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
};



// Add to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');
  
  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      
      this.innerHTML = '';
      this.appendChild(iframe);
    });
  });
});



// Add to your script.js
window.addEventListener('load', function() {
  document.getElementById('pageLoader').style.display = 'none';
});

// Add a timeout just in case
setTimeout(function() {
  if (document.getElementById('pageLoader')) {
    document.getElementById('pageLoader').style.display = 'none';
  }
}, 5000); // Hide after 5 seconds regardless