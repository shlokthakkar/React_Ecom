import React from 'react';

const Login = () => {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
