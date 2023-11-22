export default (_, res) => {
  const metadata = {
    metaTitle: 'Blog Articles',
      metaDescription: 'Read our latest blog articles.',
  };
  res.status(200).json(metadata);
};
