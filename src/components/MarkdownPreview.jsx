import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownPreview.css'; // Custom CSS for styling
import Header from './Header';

const MarkdownPreview = () => {
  // Initialize state with markdown from localStorage or default markdown
  const [markdownText, setMarkdownText] = useState(
    localStorage.getItem("generatedDocument") || '# Hello World\n\nThis is a **markdown** preview example!'
  );

  // Handle markdown text changes
  const handleMarkdownChange = (e) => {
    setMarkdownText(e.target.value);
    localStorage.setItem("generatedDocument", e.target.value); // Store updated markdown in localStorage
  };

  // Download rendered Markdown as an HTML file
  const handleDownloadRendered = () => {
    // Convert Markdown to HTML
    const renderedHTML = `<html><body>${document.querySelector('.markdown-preview').innerHTML}</body></html>`;

    // Create a Blob with the HTML content
    const blob = new Blob([renderedHTML], { type: 'text/html;charset=utf-8' });

    // Use file-saver to trigger a download
    saveAs(blob, 'rendered_document.html');
  };

  return (
    <>
      <Header />

      <div className="markdown-container mt-20">

        <div className="editor-section">
          <h3>Edit Markdown</h3>
          <textarea
            className="markdown-editor"
            value={markdownText}
            onChange={handleMarkdownChange}
            rows="10"
            cols="50" />
        </div>

        <div className="preview-section">
          <h3>Markdown Preview</h3>
          <div className="markdown-preview">
            <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </>

  );
};

export default MarkdownPreview;
