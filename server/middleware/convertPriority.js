const convertPriority = (req, res, next) => {
  let { priority } = req.body;

  console.log(`MIDDLEWARE__priority is: ${ priority }`);

  switch (priority) {
    case 'Low':
      priority = 1;
      next();
      return priority;
    case 'Medium':
      priority = 2;
      next();
      return priority;
    case 'High':
      priority = 3;
      next();
      return priority;
    case 'Blocker':
      priority = 4;
      next();
      return priority;
    default:
      res.send('Invalid priority');
      throw new Error('Invalid priority. Make sure the switch case matches the priority options on your form.');
  }
}

module.exports = convertPriority;
