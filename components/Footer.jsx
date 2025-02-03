import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2023 Mon Portfolio. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/ton-utilisateur" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ton-profil" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer

