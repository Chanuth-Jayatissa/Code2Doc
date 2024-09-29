"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Groqs from './Groqs'; // Import your Groqs component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FileViewer = () => {
  const [files, setFiles] = useState([]);
  const [repoUrl, setRepoUrl] = useState('');
  const [error, setError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State for selected file
  const navigate = useNavigate(); // Initialize navigate

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

  // Function to fetch file content
  const fetchFileContent = async (file) => {
    try {
      const response = await axios.get(file.download_url);
      return response.data; // Return the file content
    } catch (error) {
      console.error('Error fetching file content:', error);
      setError('Failed to fetch file content. Please try again.');
      return '';
    }
  };

  const handleGenerateDocument = async () => {
    if (selectedFile) {
      const content = await fetchFileContent(selectedFile); // Fetch the content of the selected file
      const response = await Groqs(content); // Call Groqs with the file content
      
      // Store the response in localStorage
      localStorage.setItem('generatedDocument', response);
      
      // Redirect to /preview page
      navigate('/preview2'); // Use navigate for redirection
    } else {
      setError('Please select a file to generate the document.');
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center">GitHub Repository Files</h1>
      
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Enter GitHub Repository URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full max-w-md text-white-900"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white rounded-md p-2 ml-2 hover:bg-purple-700"
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
                  <label className="block p-2 text-purple-300 hover:underline">
                    <input
                      type="radio"
                      name="file" // Name should be the same for radio buttons
                      value={file.name}
                      onChange={() => setSelectedFile(file)} // Set selected file
                      className="mr-2"
                    />
                    {file.name}
                  </label>
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-400">No Python or Java files found.</li>
            )}
          </ul>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={handleGenerateDocument}
          className="bg-purple-600 text-white rounded-md p-2 hover:bg-purple-700"
        >
          Generate Document
        </button>
      </div>
    </div>
  );
};

export default FileViewer;
