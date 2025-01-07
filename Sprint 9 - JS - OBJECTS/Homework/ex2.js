//Create a function that returns a new object with specific properties removed

function removeProperty(object, prop) {
  const newObject = { ...object };

  delete newObject[prop];

  return newObj;
}
