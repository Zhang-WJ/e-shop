import { createApp } from "./app";

export default context => {
  return new Promise(async (resolve, reject) => {
    const { app, router, store } = await createApp(context);
    // set the current route
    router.push(context.url);

    // wait for the component resolution
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // TODO pre-load data
      // TODO resolve(app)

      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              router: router.currentRoute
            });
          }
        })
      )
        .then(() => {
          // send back the store state
          context.state = store.state;
          // send the app to the renderer
          resolve(app);
        })
        .catch(reject);
    }, reject);
  });
};
