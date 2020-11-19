const FeatureBox = () => {
  return (
    <div style={{ maxWidth: 350 }}>
      <img src="/images/Vector.svg" width={40} height={40} />
      <div
        style={{
          fontFamily: 'Avenir',
          fontWeight: 800,
          fontSize: `24px`,
          lineHeight: `32.78px`,
        }}
      >
        Eco Friendly
      </div>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint.
      </p>
    </div>
  );
};

export default FeatureBox;
