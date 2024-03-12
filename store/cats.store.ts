import { DB_ID, COLLECTION_CATS } from "~/app.constants";

export interface ICat {
  name: string;
  descr: string;
  price: number;
  img: string;
  owner_id: string;
}

export const useCatsStore = defineStore("cats", {
  state: () => {
    return {
      cats: [] as ICat[],
    };
  },

  actions: {
    getCats() {
      const promise = DB.listDocuments(DB_ID, COLLECTION_CATS);

      promise
        .then((res) => {
          this.cats = res.documents as unknown as ICat[];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
