import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main style={{ paddingTop: '100px', flex: '1' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;