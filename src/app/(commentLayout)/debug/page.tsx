// app/debug/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { config } from '@/config/config';

export default function DebugPage() {
    const [cookies, setCookies] = useState('');
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Document cookies দেখুন
        setCookies(document.cookie);
        
        // Session check
        checkSession();
    }, []);

    const checkSession = async () => {
        try {
            const res = await fetch(`${config.backendUrl}/api/auth/get-session`, {
                credentials: 'include'
            });
            const data = await res.json();
            setSession(data);
        } catch (error) {
            console.error('Session error:', error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div style={{ padding: '20px' }}>
            <h1>🔍 Cookie & Session Debug</h1>
         
        
            
            <div style={{ marginTop: '20px' }}>
                <h2>Document Cookies:</h2>
                <pre style={{ background: '#f0f0f0', padding: '10px' }}>
                    {cookies || 'No cookies found'}
                </pre>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>Session Data:</h2>
                <pre style={{ background: '#f0f0f0', padding: '10px' }}>
                    {loading ? 'Loading...' : JSON.stringify(session, null, 2)}
                </pre>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>Cookie Names Check:</h2>
                <ul>
                    <li>better-auth.session_token: {cookies.includes('better-auth.session_token') ? '✅' : '❌'}</li>
                    <li>__Secure-better-auth.session_token: {cookies.includes('__Secure-better-auth.session_token') ? '✅' : '❌'}</li>
                </ul>
            </div>
        </div>
    );
}