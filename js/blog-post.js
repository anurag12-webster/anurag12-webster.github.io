// Blog Post Dynamic Content Handler
document.addEventListener('DOMContentLoaded', function() {
    // Get post ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // Blog posts data with navigation order
    const blogPostsOrder = ['file-system', 'machine-learning', 'web-trends', 'nodejs-api', 'career-tips', 'react-hooks'];

    const blogPosts = {
        'file-system': {
            title: 'Building a Recursive File System with React: A Deep Dive',
            author: 'Anurag Kanade',
            date: 'Published on Sep 5, 2024',
            readTime: '10 min read',
            tags: ['React', 'JavaScript', 'File System', 'Recursion'],
            content: `
                <p class="lead">
                    Building a recursive file system in React is a fascinating challenge that demonstrates the power of
                    component composition and recursive thinking. This guide will walk you through creating a fully
                    functional file system interface.
                </p>

                <h2>Understanding Recursion in React</h2>
                <p>
                    Recursion in React components allows us to create nested structures of unknown depth.
                    This is perfect for file systems where folders can contain other folders indefinitely.
                </p>

                <h2>Building the File Component</h2>
                <div class="code-block">
                    <pre><code>const FileSystemItem = ({ item, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (item.type === 'file') {
    return (
      &lt;div className="file-item"&gt;
        &lt;FileIcon /&gt;
        &lt;span&gt;{item.name}&lt;/span&gt;
      &lt;/div&gt;
    );
  }

  return (
    &lt;div className="folder-item"&gt;
      &lt;button onClick={() => setIsExpanded(!isExpanded)}&gt;
        {isExpanded ? &lt;FolderOpenIcon /&gt; : &lt;FolderIcon /&gt;}
        {item.name}
      &lt;/button&gt;
      {isExpanded && (
        &lt;div className="folder-contents"&gt;
          {item.children?.map(child => (
            &lt;FileSystemItem
              key={child.id}
              item={child}
              onUpdate={onUpdate}
            /&gt;
          ))}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
};</code></pre>
                </div>

                <h2>Conclusion</h2>
                <p>
                    Building recursive components in React opens up many possibilities for creating
                    complex, nested interfaces. The file system is just one example of how powerful
                    this pattern can be.
                </p>
            `
        },
        'react-server': {
            title: 'Using React Server Components and Server Actions in Next.js',
            author: 'Anurag Kanade',
            date: 'Published on Sep 5, 2024',
            readTime: '8 min read',
            tags: ['React', 'Next.js', 'Server Components', 'Web Development'],
            content: `
                <p class="lead">
                    React Server Components and Server Actions represent a paradigm shift in how we build React applications. 
                    This comprehensive guide explores how to leverage these powerful features in Next.js to create more efficient, 
                    performant web applications.
                </p>

                <h2>What are React Server Components?</h2>
                <p>
                    React Server Components (RSC) are a new type of component that runs on the server instead of the client. 
                    Unlike traditional React components that execute in the browser, Server Components run during the build process 
                    or on each request, allowing you to access server-side resources directly.
                </p>

                <h3>Key Benefits</h3>
                <ul>
                    <li><strong>Reduced Bundle Size:</strong> Server Components don't ship JavaScript to the client</li>
                    <li><strong>Direct Database Access:</strong> Query databases and APIs directly without additional API routes</li>
                    <li><strong>Improved Performance:</strong> Faster initial page loads and better Core Web Vitals</li>
                    <li><strong>Enhanced Security:</strong> Sensitive operations stay on the server</li>
                </ul>

                <h2>Server Actions: The Missing Piece</h2>
                <p>
                    Server Actions complement Server Components by providing a way to handle form submissions and mutations 
                    directly on the server. They eliminate the need for separate API routes for many common operations.
                </p>

                <div class="code-block">
                    <pre><code>// app/actions.js
'use server'

export async function createPost(formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Direct database operation
  await db.post.create({
    data: { title, content }
  })
  
  revalidatePath('/blog')
}</code></pre>
                </div>

                <h2>Conclusion</h2>
                <p>
                    React Server Components and Server Actions represent the future of React development. 
                    By moving computation to the server, we can build faster, more secure applications while 
                    maintaining the developer experience we love about React.
                </p>
            `
        },
        'file-system': {
            title: 'Building a Recursive File System with React: A Deep Dive',
            author: 'Arjun Kumar',
            date: 'Published on Sep 5, 2024',
            readTime: '10 min read',
            tags: ['React', 'JavaScript', 'File System', 'Recursion'],
            content: `
                <p class="lead">
                    Building a recursive file system in React is a fascinating challenge that demonstrates the power of 
                    component composition and recursive thinking. This guide will walk you through creating a fully 
                    functional file system interface.
                </p>

                <h2>Understanding Recursion in React</h2>
                <p>
                    Recursion in React components allows us to create nested structures of unknown depth. 
                    This is perfect for file systems where folders can contain other folders indefinitely.
                </p>

                <h2>Building the File Component</h2>
                <div class="code-block">
                    <pre><code>const FileSystemItem = ({ item, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (item.type === 'file') {
    return (
      &lt;div className="file-item"&gt;
        &lt;FileIcon /&gt;
        &lt;span&gt;{item.name}&lt;/span&gt;
      &lt;/div&gt;
    );
  }
  
  return (
    &lt;div className="folder-item"&gt;
      &lt;button onClick={() => setIsExpanded(!isExpanded)}&gt;
        {isExpanded ? &lt;FolderOpenIcon /&gt; : &lt;FolderIcon /&gt;}
        {item.name}
      &lt;/button&gt;
      {isExpanded && (
        &lt;div className="folder-contents"&gt;
          {item.children?.map(child => (
            &lt;FileSystemItem 
              key={child.id} 
              item={child} 
              onUpdate={onUpdate} 
            /&gt;
          ))}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
};</code></pre>
                </div>

                <h2>Conclusion</h2>
                <p>
                    Building recursive components in React opens up many possibilities for creating 
                    complex, nested interfaces. The file system is just one example of how powerful 
                    this pattern can be.
                </p>
            `
        },
        'machine-learning': {
            title: 'Getting Started with Machine Learning in 2024',
            author: 'Arjun Kumar',
            date: 'Published on Aug 28, 2024',
            readTime: '12 min read',
            tags: ['Machine Learning', 'Python', 'AI', 'Tutorial'],
            content: `
                <p class="lead">
                    Machine learning has become more accessible than ever in 2024. This comprehensive guide 
                    will help you understand the fundamentals and get started with your first ML project.
                </p>

                <h2>What is Machine Learning?</h2>
                <p>
                    Machine learning is a subset of artificial intelligence that enables computers to learn 
                    and make decisions from data without being explicitly programmed for every scenario.
                </p>

                <h2>Getting Started with Python</h2>
                <div class="code-block">
                    <pre><code>import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load your data
data = pd.read_csv('your_data.csv')

# Prepare features and target
X = data[['feature1', 'feature2']]
y = data['target']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)</code></pre>
                </div>

                <h2>Next Steps</h2>
                <p>
                    Start with simple projects and gradually work your way up to more complex problems. 
                    The key is consistent practice and continuous learning.
                </p>
            `
        }
    };
    
    // Load post content if ID is provided
    if (postId && blogPosts[postId]) {
        const post = blogPosts[postId];
        
        // Update title
        const titleElement = document.getElementById('post-title');
        if (titleElement) {
            titleElement.textContent = post.title;
        }
        
        // Update date
        const dateElement = document.getElementById('post-date');
        if (dateElement) {
            dateElement.textContent = post.date;
        }
        
        // Update content
        const contentElement = document.getElementById('post-content');
        if (contentElement) {
            contentElement.querySelector('.prose').innerHTML = post.content;
        }
        
        // Update tags
        const tagsContainer = document.querySelector('.blog-post-tags');
        if (tagsContainer && post.tags) {
            tagsContainer.innerHTML = post.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }
        
        // Update page title
        document.title = `${post.title} - Portfolio`;

        // Update navigation
        updateBlogNavigation(postId);
    }

    // Function to update blog post navigation
    function updateBlogNavigation(currentPostId) {
        const currentIndex = blogPostsOrder.indexOf(currentPostId);
        const prevPost = currentIndex > 0 ? blogPostsOrder[currentIndex - 1] : null;
        const nextPost = currentIndex < blogPostsOrder.length - 1 ? blogPostsOrder[currentIndex + 1] : null;

        const navigation = document.querySelector('.blog-post-navigation');
        if (navigation) {
            let navHTML = '';

            if (prevPost && blogPosts[prevPost]) {
                navHTML += `
                    <a href="blog-post.html?id=${prevPost}" class="nav-post prev-post">
                        <div class="nav-post-direction">← Previous</div>
                        <div class="nav-post-title">${blogPosts[prevPost].title}</div>
                    </a>
                `;
            } else {
                navHTML += '<div></div>'; // Empty div for grid layout
            }

            if (nextPost && blogPosts[nextPost]) {
                navHTML += `
                    <a href="blog-post.html?id=${nextPost}" class="nav-post next-post">
                        <div class="nav-post-direction">Next →</div>
                        <div class="nav-post-title">${blogPosts[nextPost].title}</div>
                    </a>
                `;
            } else {
                navHTML += '<div></div>'; // Empty div for grid layout
            }

            navigation.innerHTML = navHTML;
        }
    }
    
    // Handle share button with enhanced functionality
    const shareButton = document.getElementById('share-post');
    if (shareButton) {
        shareButton.addEventListener('click', async function() {
            const postTitle = document.getElementById('post-title')?.textContent || document.title;
            const postDescription = document.querySelector('meta[property="og:description"]')?.content || 'Check out this blog post!';
            const postUrl = window.location.href;

            // Try native sharing first (mobile devices)
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: postTitle,
                        text: postDescription,
                        url: postUrl
                    });
                    return;
                } catch (err) {
                    console.log('Native sharing failed, falling back to clipboard');
                }
            }

            // Fallback: copy to clipboard with enhanced feedback
            try {
                await navigator.clipboard.writeText(postUrl);

                // Show success feedback
                const originalContent = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
                this.style.backgroundColor = 'var(--accent-primary)';
                this.style.color = 'white';

                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }, 2000);

            } catch (err) {
                // If clipboard fails, show URL in a prompt
                prompt('Copy this URL to share:', postUrl);
            }
        });
    }
});
