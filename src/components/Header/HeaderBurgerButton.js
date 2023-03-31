import { useState } from 'react';

export const HeaderBurgerButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickButton = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <button
      className="header-burger-button"
      type="button"
      onClick={handleClickButton}
    >
      <span className={`header-burger-button-line-top ${menuOpen ? 'active' : ""}`} />
      <span className={`header-burger-button-line-mid ${menuOpen ? 'active' : ""}`} />
      <span className={`header-burger-button-line-bottom ${menuOpen ? 'active' : ""}`} />
    </button>
  );
}
