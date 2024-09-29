"use client";

import React, { useState } from 'react'
import { useRef } from "react";
import Headers from './Header';

import { GoogleLogin } from '@react-oauth/google';
import {  useNavigate } from 'react-router-dom';


function Signup() {
    const parallaxRef = useRef(null);
    const navigate = useNavigate();

    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Headers />
            <center style={{ paddingTop: '10%' }}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        navigate("/dashboard");
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </center>
        </div>

    )
}

export default Signup