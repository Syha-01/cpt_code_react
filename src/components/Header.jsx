
export default function Header() {
  return (
     <header>
            <button id="backButton" className="icon-button" title="Go Back">
                <img src="/left-arrow.svg" alt="Back" />
            </button>
            <h1 className="app-title">CPT Code Lookup</h1>
            <div className="header-controls">
                <button id="theme-toggle" className="icon-button" title="Toggle Theme">
                    <img src="/sun.svg" alt="Toggle Theme" />
                </button>
            </div>
        </header>
  );
}
