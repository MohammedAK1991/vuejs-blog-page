
export default (_, res) => {
  const metadata = {
    metaTitle: 'About Page',
    metaDescription: 'Learn more about us.'
  };
  res.status(200).json(metadata);
};
