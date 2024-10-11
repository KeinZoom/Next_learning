export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const slug = params.slug;
  if (slug?.length === 2) {
    return (
      <h1>
        feature {slug[0]} for example {slug[1]}
      </h1>
    );
  }
  if (slug?.length === 1) {
    return <h1> feature page {slug[0]}</h1>;
  }

  return <h1>docs home page</h1>;
}
