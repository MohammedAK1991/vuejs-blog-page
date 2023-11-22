
export default (_, res) => {
  const metadata = {
    metaTitle: 'Home Page',
    metaDescription: 'Welcome to our home page.',
  };
  res.status(200).json(metadata);
};
