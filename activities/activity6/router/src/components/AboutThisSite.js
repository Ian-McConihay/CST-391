import React from 'react';

export default function AboutThisSite() {
  return (
    <div className="p-3">
      <h2>About This Site</h2>
      <p>
        This demo illustrates React Router v6 features such as BrowserRouter,
        Routes, and PrivateRoute components. Only logged-in users can see this page.
      </p>
    </div>
  );
}