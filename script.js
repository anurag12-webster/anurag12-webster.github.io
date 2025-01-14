document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const payload = {
            content: `**Hey Anurag Someone messaged you!**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`
        };

        try {
            const response = await fetch('https://discord.com/api/webhooks/1328756790447444070/koy8eGURcDFSeWjnNbyEeHyeN9Pu1gQZWnSvpbkjrGCHRvycESqchs3XQ4JNy493aewz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert(`Thank you for your message, ${name}!\nanurag will get back to you at ${email} soon.`);
                form.reset();
            } else {
                alert('Error: Failed to send your message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending to webhook:', error);
            alert('Error: Failed to send your message. Please try again later.');
        }
    });
});

