# CodeMe Website

CodeMe is an interactive and educational website designed to teach users how to code, starting from beginner concepts and progressing to intermediate and advanced levels. The website covers multiple programming languages and technologies, including HTML, CSS, JavaScript, and Python. Each topic is presented with examples, explanations, and outputs to ensure a comprehensive learning experience.

## Features

- **Homepage**: An introduction to CodeMe with links to all topic pages.
- **Topic Pages**:
  - **HTMLMe**: Learn HTML with examples, explanations, and outputs.
  - **CSSMe**: Explore CSS concepts with examples, explanations, and outputs.
  - **JavaScriptMe**: Dive into JavaScript with examples, explanations, and outputs.
  - **PythonMe**: Master Python with examples, explanations, and outputs.
- **Blog Page**: Share ideas and comments with a dynamic blog interface.
- **Contact Page**: A form for users to provide feedback or ask questions.
- **Success Page**: Displays a personalized "Thank you, [user name]" message after form submission.
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.
- **Interactive Navbar**: A responsive burger menu for easy navigation on smaller screens.

## File Structure

```
codeMe/
│
├── index.html                # Homepage
├── htmlMe.html               # HTML topic page
├── cssMe.html                # CSS topic page
├── javascriptMe.html         # JavaScript topic page
├── pythonMe.html             # Python topic page
├── blog.html                 # Blog page
├── contact.html              # Contact page
├── success.html              # Success page
│
├── static/
│   ├── css/
│   │   ├── style.css         # General styles
│   │   ├── htmlMestyle.css   # Styles for HTML topic page
│   │   ├── cssMestyle.css    # Styles for CSS topic page
│   │   ├── javascriptMestyle.css # Styles for JavaScript topic page
│   │   ├── pythonMestyle.css # Styles for Python topic page
│   │   ├── blogstyle.css     # Styles for Blog page
│   │
│   ├── script.js             # JavaScript for interactivity
│
└── README.md                 # Project documentation
```

## How to Use

1. **Homepage**: Start at the homepage (`index.html`) to navigate to the topic pages.
2. **Topic Pages**: Select a topic (HTML, CSS, JavaScript, Python) to view examples and explanations.
3. **Blog Page**: Share your ideas and comments dynamically. Use the "Return to Top" button for easy navigation.
4. **Interactive Examples**: Click the "Show Examples" buttons to display code examples and their outputs.
5. **Contact Us**: Use the contact form to send feedback or questions.
6. **Dark Mode**: Use the "Toggle Dark Mode" button to switch themes.

## Blog Page Features

- **Dynamic Blog Posts**: Users can add blog posts dynamically using JavaScript.
- **Delete Posts**: Each post includes a delete button to remove it.
- **Return to Top Button**: Always visible above the footer for easy navigation.
- **Fixed Header and Footer**: Ensures consistent navigation and branding.

## Installation and Deployment

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/codeMe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd codeMe
   ```
3. Open `index.html` in your browser to view the website locally.
4. Deploy the website to GitHub Pages:
   - Push the code to a GitHub repository.
   - Go to the repository settings and enable GitHub Pages.

## Example Code Structure

### Blog Page Example
```html
<div class="add-post">
    <h2>Share Your Ideas</h2>
    <textarea id="postContent" placeholder="Write your blog post here..."></textarea>
    <button onclick="addPost()">Post</button>
</div>

<div class="blog-posts" id="blogPosts">
    <!-- Blog posts will be dynamically added here -->
</div>
```

### JavaScript for Blog Page Interactivity
```javascript
function addPost() {
    const postContent = document.getElementById('postContent').value;
    if (!postContent.trim()) {
        alert('Please write something before posting.');
        return;
    }

    const blogPosts = document.getElementById('blogPosts');
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post';

    const postTitle = document.createElement('h3');
    postTitle.textContent = `Post #${blogPosts.children.length + 1}`;
    postDiv.appendChild(postTitle);

    const postText = document.createElement('p');
    postText.textContent = postContent;
    postDiv.appendChild(postText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginTop = '0.5rem';
    deleteButton.style.backgroundColor = '#dc3545';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '0.5rem 1rem';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.onclick = () => blogPosts.removeChild(postDiv);
    postDiv.appendChild(deleteButton);

    blogPosts.appendChild(postDiv);
    document.getElementById('postContent').value = '';
}

## Enable "Enter" Key Submission

All forms and major input areas on the CodeMe website support submission by pressing the "Enter" or "Return" key, without affecting other page functionality. This is achieved by:

- Using `<form onsubmit="...">` and `<button type="submit">` for all forms, so pressing "Enter" in any input (except textareas) submits the form.
- For comment areas and custom input sections, JavaScript event listeners are used to detect "Enter" (but not Shift+Enter) and trigger the appropriate action.
- The default behavior of textareas (allowing newlines with Enter) is preserved.

**Example Implementation:**
```html
<form id="contactForm" onsubmit="submitContact(event)">
    <input type="text" id="name" required>
    <input type="email" id="email" required>
    <textarea id="message" required></textarea>
    <button type="submit">Send</button>
</form>
<script>
document.getElementById('contactForm').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        this.requestSubmit();
    }
});
</script>
```

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

Mobolaji Onafuwa.  
Full Stack Developer (AI-Augmented Programming)  
Copyright 2025

## Contact

For questions or feedback, please use the [Contact Page](contact.html) on the website or reach out via GitHub.

---
Happy Coding!  