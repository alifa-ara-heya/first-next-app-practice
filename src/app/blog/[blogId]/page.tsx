const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  console.log(await params);
  const { blogId } = await params;
  console.log(blogId);
  return (
    <div>
      <h2>Dynamic Blog page: 1</h2>
    </div>
  );
};

export default DynamicBlogPage;
