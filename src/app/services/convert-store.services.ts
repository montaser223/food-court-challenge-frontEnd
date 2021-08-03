export const convertStoreToFormData = (storeObject: any): FormData => {
  let store = new FormData();
  for (const key in storeObject) {
    store.append(key, storeObject[key]);
    console.log(`${key} = ${storeObject[key]}`);
  }
  return store;
};
