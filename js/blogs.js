const btnTheme = document.getElementById("toggleTheme");

btnTheme.addEventListener("click", () => {
  if (document.body.classList.contains("body-light")) {
    document.body.classList.add("body-dark");
    document.body.classList.remove("body-light");
    btnTheme.querySelector("i").classList.remove("fa-moon");
    btnTheme.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.add("body-light");
    document.body.classList.remove("body-dark");
    btnTheme.querySelector("i").classList.remove("fa-sun");
    btnTheme.querySelector("i").classList.add("fa-moon");
  }
});

async function fetchMediumArticles(username) {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
  );
  const data = await response.json();
  return data.items;
}

function createBlogPostContainer(article) {
  const blogsContainer = document.getElementById("blogs-container");

  const container = document.createElement("div");
  container.className = "project-container";

  const parser = new DOMParser();
  const doc = parser.parseFromString(article.content, "text/html");
  const firstImage = doc.querySelector("img");

  let imageUrl;
  if (firstImage && firstImage.src) {
    imageUrl = firstImage.src;
  } else {
    imageUrl = `https://miro.medium.com/max/1200/${article.guid
      .split("-")
      .pop()}`;
  }

  container.innerHTML = `
        <div class="project-image">
          <img src="${imageUrl}" alt="${
    article.title
  }" onerror="this.src='https://placehold.co/600x400?text=No+Image'" />
        </div>
        <div class="project-content">
          <h3>${article.title}</h3>
          <p>${article.description
            .replace(/<[^>]*>/g, "")
            .substring(0, 100)}...</p>
          <ul class="project-skill">
            <li>
              <a href="${
                article.link
              }" target="_blank" class="btn btn-read">Read</a>
            </li>
            <li>
              <button class="btn btn-share" data-url="${
                article.link
              }">Share</button>
            </li>
            <li>
              <span class="eye-icon">
                <i class="fas fa-eye"></i> <span class="view-count" data-id="${
                  article.guid
                }">0</span>
              </span>
            </li>
          </ul>
        </div>
      `;

  blogsContainer.appendChild(container);
}

function handleShareButtonClick(event) {
  const url = event.target.getAttribute("data-url");
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
}

function updateViewCount(articleId) {
  const viewCountElement = document.querySelector(
    `.view-count[data-id="${articleId}"]`
  );
  let viewCount = localStorage.getItem(articleId) || 0;
  viewCount = parseInt(viewCount) + 1;
  localStorage.setItem(articleId, viewCount);
  viewCountElement.textContent = viewCount;
}

document.addEventListener("DOMContentLoaded", async () => {
  const username = "anuragkanade6";
  const articles = await fetchMediumArticles(username);

  articles.forEach((article) => {
    createBlogPostContainer(article);
    updateViewCount(article.guid);
  });

  document.querySelectorAll(".btn-share").forEach((button) => {
    button.addEventListener("click", handleShareButtonClick);
  });
});
