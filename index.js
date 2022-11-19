const blogPostData = [
    {
        date: "July 21, 2022",
        title: 'Blog Six',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-06.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "July 14, 2022",
        title: 'Blog Five',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-05.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "July 7, 2022",
        title: 'Blog Four',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-04.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 31, 2022",
        title: 'Blog Three',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-03.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 24, 2022",
        title: 'Blog Two',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-02.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 17, 2022",
        title: 'Blog One',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-01.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "June 31, 2022",
        title: 'Blog Three',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-03.png",
        imageAlt: 'Picture of a computer and desk',
    },
    {
        date: "July 21, 2022",
        title: 'Blog Six',
        content: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        imagePath: "images/blog-image-06.png",
        imageAlt: 'Picture of a computer and desk',
    },
]


function getBlogHtml() {

    let blogHtml = ``
    blogPostData.forEach(function (post) {
        blogHtml += `
        <article class="post">
            <img class="article-img" src="${post.imagePath}" alt="${post.imageAlt}">
            <span class="article-info">${post.date}</span>
            <h2 class="article-title">${post.title}</h2>
            <p class="article-preview">${post.content}</p>
        </article>
        `
    })
    return blogHtml

}
function renderHome() {
    const blogFeed = document.getElementById('posts')
    blogFeed.innerHTML = getBlogHtml()
}
renderHome()