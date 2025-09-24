const CatchAllRoute = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  return (
    <div>
      <h2>Catch All route Page</h2>
    </div>
  );
};

export default CatchAllRoute;
