import { DB_ID, COLLECTION_CATS } from "~/app.constants";

export interface ICat {
  $id: string;
  name: string;
  descr: string;
  img: string;
  owner_id: string;
  age: string;
  vaccine: boolean;
  relation_people: string;
  relation_animals: string;
  tags: string;
  phone: string;
}

export const useCatsStore = defineStore("cats", {
  state: () => {
    return {
      cats: [] as ICat[],
      loading: false,
      newCat: {
        name: "",
        descr: "",
        img: "",
        age: "",
        vaccine: false,
        relation_people: "",
        relation_animals: "",
        tags: "",
        phone: "",
      },
      favoriteCats: [] as ICat[],
      favoriteCatsSlice: [] as ICat[],
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

          this.getFavoriteCats();
        })
        .catch((err) => {
          console.log(err);

          toast.add({
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
        title: "Ошибка",
        color: "red",
        description: "Чтобы добавить котика, нужно войти",
      });
    },

    setLoading(val: boolean) {
      this.loading = val;
    },

    getFavoriteCats() {
      const cats = localStorage.getItem("favoriteCats");

      if (cats) {
        this.favoriteCats = this.cats.filter((f) =>
          JSON.parse(cats).find((c: ICat) => c.$id === f.$id)
        );
      } else {
        this.favoriteCats = [];
      }

      this.showFavoriteCatsPage(1);
    },

    setFavoriteCat(cat: ICat) {
      let curCat = this.favoriteCats.find((f: ICat) => f.$id === cat.$id);

      if (curCat) {
        this.favoriteCats = this.favoriteCats.filter(
          (f: ICat) => f.$id !== cat.$id
        );

        localStorage.setItem("favoriteCats", JSON.stringify(this.favoriteCats));
      } else {
        this.favoriteCats.push(cat);

        localStorage.setItem("favoriteCats", JSON.stringify(this.favoriteCats));
      }

      this.getFavoriteCats();
    },

    showFavoriteCatsPage(page: number) {
      const page_size = 10;

      this.favoriteCatsSlice = this.favoriteCats.slice(
        (page - 1) * page_size,
        page * page_size
      );
    },
  },
});
