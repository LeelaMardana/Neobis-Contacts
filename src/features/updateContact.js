export const updateContact = current => {
  const data = JSON.parse(localStorage.getItem('contacts'));
  const list = data.map(item => {
    if (item.id === current.id) {
      return current;
    }
    return item;
  });
  localStorage.setItem('contacts', JSON.stringify(list));
};
