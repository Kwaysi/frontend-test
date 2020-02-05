function importAll(r) {
  let images = {};
  r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./', false, /\.(svg|jpg|png)$/));

export default images;