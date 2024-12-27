export default async function Project({ params }) {
  const { projectId } = await params;

  return <div>{projectId}</div>;
}
