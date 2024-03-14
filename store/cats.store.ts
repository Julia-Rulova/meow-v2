import { DB_ID, COLLECTION_CATS } from "~/app.constants";

export interface ICat {
  id: string;
  name: string;
  descr: string;
  img: string;
  owner_id: string;
  age: string;
  vaccine: boolean;
  relation_people: string;
  relation_animals: string;
}

export const useCatsStore = defineStore("cats", {
  state: () => {
    return {
      cats: [] as ICat[],
      loading: false,
    };
  },

  actions: {
    getCats() {
      const promise = DB.listDocuments(DB_ID, COLLECTION_CATS);
      const toast = useToast();

      this.setLoading(true);
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
        })
        .finally(() => {
          this.setLoading(false);
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

    setLoading(val: boolean) {
      this.loading = val;
    },
  },
});
