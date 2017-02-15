const data = [
  { id: 1, name: 'Christoffer', age: 32, relative: [2, 3]},
  { id: 2, name: 'Nina', age: 30, relative: [1, 3] },
  { id: 3, name: 'Elli', age: 1, relative: [1, 2] },
];

const getAllPersons = () => Promise.resolve(data);
const getPersonById = id => Promise.resolve(data.find(t => t.id === id));

module.exports = {
  getAllPersons,
  getPersonById,
};
