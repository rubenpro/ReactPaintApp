const FormatGrid = cols => {
  const string = 'auto';
  let result = '';
  if (typeof cols === 'number' && cols > 0) {
    for (let i = 0; i < cols; i += 1) {
      result += `${string} `;
    }
  }
  return result;
};

export default FormatGrid;
