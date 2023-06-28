import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Mantine", href: "#" },
  { title: "Mantine hooks", href: "#" },
  { title: "use-id", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Breadcrumb() {
  return (
    <>
      <Breadcrumbs mt={25} mb={25}>
        {items}
      </Breadcrumbs>
    </>
  );
}
export default Breadcrumb;
