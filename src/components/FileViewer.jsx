"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileViewer = () => {
  const [files, setFiles] = useState([]);
  const [repoUrl, setRepoUrl] = useState('');
  const [error, setError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const fetchFiles = async (url) => {
    const urlParts = url.split('github.com/');
    if (urlParts.length < 2) {
      setError('Invalid GitHub URL');
      return;
    }

    const [username, repoName] = urlParts[1].split('/').slice(0, 2);

    if (!username || !repoName) {
      setError('Invalid GitHub URL');
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contents/`);
      setFiles(response.data);
      setError(''); // Reset error message if successful
      setIsDropdownOpen(true); // Open dropdown when files are fetched
    } catch (error) {
      console.error('Error fetching files from GitHub', error);
      setError('Failed to fetch files. Please check the URL.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFiles(repoUrl);
  };

  // Filter files to include only Python (.py) and Java (.java) files
  const filteredFiles = files.filter(file =>
    file.name.endsWith('.py') || file.name.endsWith('.java')
  );

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold mb-4">GitHub Repository Files</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub Repository URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full text-white-900"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white rounded-md p-2 mt-2 hover:bg-purple-700"
        >
          Fetch Files
        </button>
      </form>

      {error && <p className="text-red-300">{error}</p>}

      {isDropdownOpen && (
        <div className="border border-gray-300 rounded-md overflow-hidden max-h-48 overflow-y-auto bg-gray-800">
          <ul className="bg-gray-800">
            {filteredFiles.length > 0 ? (
              filteredFiles.map((file) => (
                <li key={file.sha} className="hover:bg-purple-700">
                  <a 
                    href={file.download_url} // Use the raw download URL
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-2 text-purple-300 hover:underline"
                  >
                    {file.name}
                  </a>
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-400">No Python or Java files found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileViewer;
