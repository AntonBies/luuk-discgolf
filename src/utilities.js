let nextId = localStorage.getItem('nextId') && Number(localStorage.getItem('nextId'));
nextId = nextId || 2;
export const generateId = () => {
  const result = nextId;
  nextId += 1;
  localStorage.setItem('nextId', nextId);
  return result;
}