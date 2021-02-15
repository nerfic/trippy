const getPaginationDetails = ({
  Model,
  query = {},
  limit,
  page
}) => new Promise((resolve, reject) => {
  Model.countDocuments(query, (err, count) => {
    if (err) {
      reject(`controllers/hotels#getPaginationDetails err: ${err}`);
      return;
    }
    const totalPages = Math.ceil(count / limit);
    const result = {
      total: count,
      totalPages
    };
    resolve(result);
  });
});

module.exports = {
  getPaginationDetails
};