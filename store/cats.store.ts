import { DB_ID, COLLECTION_CATS } from "~/app.constants";

export interface ICat {
  id: string;
  name: string;
  descr: string;
  price: number;
  img: string;
  owner_id: string;
  age: string;
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
      const toast = useToast();

      promise
        .then((res) => {
          this.cats = res.documents as unknown as ICat[];
        })
        .catch((err) => {
          console.log(err);

          toast.add({
            icon: "i-material-symbols-error",
            title: "Не удалось получить данные",
            color: "red",
            description: err,
          });
        });
    },

    createNewCat() {
      const toast = useToast();

      toast.add({
        icon: "i-heroicons-exclamation-circle-16-solid",
        title: "Ошибка",
        color: "red",
        description: "Чтобы добавить котика, нужно войти",
      });
    },
  },
});
