import React from 'react';
import styles from '../app/page.module.css';

export function MobileNavbar({ toggleSidebar }) {
  return (
    <div className={styles.mobileNavbarContainer}>
      <div className={styles.mobileNavbar}>
        <button 
          className={styles.mobileNavButton}
          onClick={toggleSidebar}
          aria-label="Show similar questions"
        >
          <svg 
            className={styles.mobileNavIcon} 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          Similar Questions
        </button>
      </div>
    </div>
  );
}