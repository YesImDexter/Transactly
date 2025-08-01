// shared.js
window.loadHTML = async function(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const placeholder = document.getElementById(elementId);
        if (placeholder) {
            // Create a temporary div to parse the HTML string
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Append styles directly to the head if any
            tempDiv.querySelectorAll('style').forEach(style => {
                document.head.appendChild(style);
            });

            // Append the actual HTML content to the placeholder
            // This assumes the main content of header.html is the <header> tag itself
            const headerContent = tempDiv.querySelector('header'); // Or any other main tag
            if (headerContent) {
                placeholder.appendChild(headerContent);
            } else {
                // If header.html contains other elements or raw HTML, append all children
                while (tempDiv.firstChild) {
                    placeholder.appendChild(tempDiv.firstChild);
                }
            }
            
            // Execute scripts found within the fetched HTML
            tempDiv.querySelectorAll('script').forEach(oldScript => {
                const newScript = document.createElement('script');
                // Copy attributes (like src, type)
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.textContent = oldScript.textContent; // Copy script content

                // Append and execute the new script
                document.body.appendChild(newScript); // Append to body or head
            });
        }
    } catch (error) {
        console.error(`Error loading HTML from ${url}:`, error);
    }
};