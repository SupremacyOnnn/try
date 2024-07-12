import LayoutHeader from "@/app/components/LayoutHeader";

const layout = ({ children, header, main }) => {
  return (
    <>
      <LayoutHeader />
      {header}
      {main}
      {children}
    </>
  );
};

export default layout;
