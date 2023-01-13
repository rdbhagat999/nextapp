import DefaultTags from "./DefaultTags";

export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <DefaultTags />
      <title>Next App</title>
    </>
  );
}
