import React from 'react';

export const Achievements = () => {
    return (
        <div className='text-center container'>
            <h1>Achievements</h1>
            <div className="bg-dark d-inline-block p-2 rounded border border-3 border-success">
            <ul className="list-unstyled">
                <li>
                    <a href="https://academy.hackthebox.com/achievement/845032/18">Linux Fundamentals</a>
                </li>
                <li>
                    <a href="https://academy.hackthebox.com/achievement/845032/39">Using Metasploit Framework</a>
                </li>
                <li>
                    <a href="https://academy.hackthebox.com/achievement/845032/75">Introduction to Web Applications</a>
                </li>
                <li>
                    <a href="https://academy.hackthebox.com/achievement/845032/34">Introduction to Networking</a>
                </li>
            </ul>
            </div>
        </div>
    );
}