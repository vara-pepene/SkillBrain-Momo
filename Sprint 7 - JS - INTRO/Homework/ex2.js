// Write a function called tellFortune that takes 4 arguments and displays "your future"

function tellFortune(
  numberOfChildren,
  partnerName,
  geographicLocation,
  jobTitle
) {
  // Using template literals for string interpolation
  console.log(
    `You will be a ${jobTitle} in ${geographicLocation}, married to ${partnerName} and you will have ${numberOfChildren} children.`
  );
}
