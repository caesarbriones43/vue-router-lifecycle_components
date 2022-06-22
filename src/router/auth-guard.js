const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("DBZ Route is Autenticated");
      next();
    } else {
      console.log("DBZ Route is not Autenticated", random);
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
