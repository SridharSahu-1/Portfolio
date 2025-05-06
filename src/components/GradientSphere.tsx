const GradientSphere = ({
  sphere1Class,
  sphere2Class,
}: {
  sphere1Class?: string | undefined;
  sphere2Class?: string | undefined;
}) => {
  return (
    <>
      <div className={sphere1Class}></div>
      <div className={sphere2Class}></div>
    </>
  );
};

export default GradientSphere;
