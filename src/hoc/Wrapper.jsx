const Wrapper = (WrappedComponent) => {
  return () => {
    return (
      <div className="container">
        <WrappedComponent />
      </div>
    );
  };
};

export default Wrapper;
