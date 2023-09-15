const Wrapper = ({ children, wrapType, label }) => {
  return (
    <div className={`wrap-item wrap-item-${wrapType}`}>
      <span className="label">{label}</span>
      {children}
    </div>
  );
};

export const New = ({ children }) => {
  return <Wrapper wrapType="new" label="New!" children={children} />;
};

export const Popular = ({ children }) => {
  return <Wrapper wrapType="popular" label="Popular!" children={children} />;
};
