const getData = async () => {
  const get = await fetch("some api");
  const res = await res.json();

  console.log(res);
};

getData();
