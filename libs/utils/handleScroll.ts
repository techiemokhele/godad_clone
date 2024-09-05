export const handleScroll = (
  e:
    | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: string,
  isOpen?: boolean,
  toggleMenu?: () => void
) => {
  e.preventDefault();
  const targetSection = document.querySelector(id);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  if (isOpen && toggleMenu) {
    toggleMenu();
  }
};
