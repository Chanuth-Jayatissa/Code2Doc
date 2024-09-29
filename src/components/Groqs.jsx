// Groqs.js
"use client";

import React, { useEffect, useState } from 'react';
import { Groq } from 'groq-sdk';

const Groqs = async (content) => {
    const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });

    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: content.concat("", " Create a Detail Documentation and Examples of Useage of the Classes and Functions"), // Use the content passed as a parameter
                },
            ],
            model: 'llama3-8b-8192',
        });
        return response.choices[0]?.message?.content || '';
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        return '';
    }
};

export default Groqs;
