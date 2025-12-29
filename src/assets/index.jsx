const images = import.meta.glob("./images/**/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: 'default'
});

export default images;