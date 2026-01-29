const navData = [
  { id: 1, title: "Doação", toLocal: "/donation" },
  { id: 2, title: "Voluntariado", toLocal: "/volunteer" },
  { id: 3, title: "Mentoria", toLocal: "/mentorship" },
  { id: 4, title: "Eventos", toLocal: "/events" },
];

const menuDropdown = [
  { id: 0, title: "Igor Alencar" },
  ...navData,
  { id: 5, title: "Sair" },
];

export { navData, menuDropdown };
