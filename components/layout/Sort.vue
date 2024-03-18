<template>
  <article
    class="flex flex-col bg-white px-4 py-5 rounded-xl shadow-xl h-fit sticky top-7 left-9"
  >
    <h3 class="text-2xl mb-4">Поиск и сортировка</h3>

    <span class="mb-2 underline decoration-primary">Поиск по имени</span>

    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="sm"
      color="white"
      :trailing="false"
      placeholder="Имя котика"
    />

    <span class="mt-4 mb-2 underline decoration-primary"
      >Поиск по хэштегам</span
    >

    <ul class="flex flex-col gap-2">
      <li>
        <span class="text-sm text-slate-500">Пол</span>

        <UiSelect>
          <UiSelectTrigger class="w-[280px] bg-white">
            <UiSelectValue placeholder="Пол" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem value="м">М</UiSelectItem>
              <UiSelectItem value="ж">Ж</UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </li>

      <li>
        <span class="text-sm text-slate-500">Окрас</span>

        <UiSelect>
          <UiSelectTrigger class="w-[280px] bg-white">
            <UiSelectValue placeholder="Окрас" />
          </UiSelectTrigger>
          <UiSelectContent class="w-[300px]">
            <UiSelectGroup>
              <UiSelectItem value="серый">Серый</UiSelectItem>
              <UiSelectItem value="белый">Белый</UiSelectItem>
              <UiSelectItem value="черный">Черный</UiSelectItem>
              <UiSelectItem value="маркиз">Маркиз</UiSelectItem>
              <UiSelectItem value="шпрот">Шпрот</UiSelectItem>
              <UiSelectItem value="рыжий">Рыжий</UiSelectItem>
              <UiSelectItem value="дымчатобелый">Дымчатобелый</UiSelectItem>
              <UiSelectItem value="черепашка">Черепашка</UiSelectItem>
              <UiSelectItem value="трехцветка">Трехцветка</UiSelectItem>
              <UiSelectItem value="голубой">Голубой</UiSelectItem>
              <UiSelectItem value="черный_дым">Черный дым</UiSelectItem>
              <UiSelectItem value="золотой">Золотой</UiSelectItem>
              <UiSelectItem
                value="окраснепрописан_кошачий_заводчик_уточнит_характеристику"
              >
                Окрас не прописан, кошачий заводчик уточнит характеристику
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </li>

      <li>
        <span class="text-sm text-slate-500">Место</span>

        <UiSelect>
          <UiSelectTrigger class="w-[280px] bg-white">
            <UiSelectValue placeholder="Место" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem value="домашняя_передержка">
                Домашняя передержка
              </UiSelectItem>
              <UiSelectItem value="бокс_в_стационаре">
                Бокс в стационаре
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </li>

      <li>
        <span class="text-sm text-slate-500">Здоровье</span>

        <UiSelect>
          <UiSelectTrigger class="w-[280px] bg-white">
            <UiSelectValue placeholder="Здоровье" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem value="лейкоз">Лейкоз</UiSelectItem>
              <UiSelectItem value="одним_котиком">Одним котиком</UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </li>

      <li>
        <span class="text-sm text-slate-500">Другое</span>

        <UiSelect>
          <UiSelectTrigger class="w-[280px] bg-white">
            <UiSelectValue placeholder="Другое" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem value="вислоушка">Вислоушка</UiSelectItem>
              <UiSelectItem value="пушитсый">Пушитсый</UiSelectItem>
              <UiSelectItem value="тайский">Тайский</UiSelectItem>
              <UiSelectItem value="мраморный">Мраморный</UiSelectItem>
              <UiSelectItem value="махачкала">Махачкала</UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </li>
    </ul>
  </article>
</template>
