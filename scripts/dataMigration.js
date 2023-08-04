const { Prisma, PrismaClient } = require('@prisma/client');
const kuliev = require('../../readquran.ru/data/kuliev.json');
const krac = require('../../readquran.ru/data/krac.json');
const Promise = require('bluebird');

const prisma = new PrismaClient({ log: ['query'] });

const kk = kuliev.map((item) => ({
  text: item.text,
  order: item.order,
  chapterId: item.surah,
  translationId: 1,
}));

const dd = krac.map((item) => ({
  text: item.text,
  order: item.order,
  chapterId: item.surah,
  translationId: 2,
}));

async function main() {
  await Promise.all([
    await prisma.verse.deleteMany(),
    await prisma.translation.deleteMany(),
    await prisma.chapter.deleteMany(),
  ]);

  const data = [
    {
      name: 'Сгусток',
      id: 96,
      chronologicalOrder: 1,
    },
    {
      name: 'Завернувшийся',
      id: 74,
      chronologicalOrder: 2,
    },
    {
      name: 'Пальмовые Волокна',
      id: 111,
      chronologicalOrder: 3,
    },
    {
      name: 'Курайш',
      id: 106,
      chronologicalOrder: 4,
    },
    {
      name: 'Обильный',
      id: 108,
      chronologicalOrder: 5,
    },
    {
      name: 'Хулитель',
      id: 104,
      chronologicalOrder: 6,
    },
    {
      name: 'Подаяние',
      id: 107,
      chronologicalOrder: 7,
    },
    {
      name: 'Охота К Умножению',
      id: 102,
      chronologicalOrder: 8,
    },
    {
      name: 'Слон',
      id: 105,
      chronologicalOrder: 9,
    },
    {
      name: 'Ночь',
      id: 92,
      chronologicalOrder: 10,
    },
    {
      name: 'Город',
      id: 90,
      chronologicalOrder: 11,
    },
    {
      name: 'Разве Мы Не Раскрыли',
      id: 94,
      chronologicalOrder: 12,
    },
    {
      name: 'Утро',
      id: 93,
      chronologicalOrder: 13,
    },
    {
      name: 'Могущество',
      id: 97,
      chronologicalOrder: 14,
    },
    {
      name: 'Идущий Ночью',
      id: 86,
      chronologicalOrder: 15,
    },
    {
      name: 'Солнце',
      id: 91,
      chronologicalOrder: 16,
    },
    {
      name: 'Нахмурился',
      id: 80,
      chronologicalOrder: 17,
    },
    {
      name: 'Письменная Трость',
      id: 68,
      chronologicalOrder: 18,
    },
    {
      name: 'Высочайший',
      id: 87,
      chronologicalOrder: 19,
    },
    {
      name: 'Смоковница',
      id: 95,
      chronologicalOrder: 20,
    },
    {
      name: 'Предвечернее Время',
      id: 103,
      chronologicalOrder: 21,
    },
    {
      name: 'Башни',
      id: 85,
      chronologicalOrder: 22,
    },
    {
      name: 'Закутавшийся',
      id: 73,
      chronologicalOrder: 23,
    },
    {
      name: 'Поражающее',
      id: 101,
      chronologicalOrder: 24,
    },
    {
      name: 'Землетрясение',
      id: 99,
      chronologicalOrder: 25,
    },
    {
      name: 'Раскалывание',
      id: 82,
      chronologicalOrder: 26,
    },
    {
      name: 'Скручивание',
      id: 81,
      chronologicalOrder: 27,
    },
    {
      name: 'Звезда',
      id: 53,
      chronologicalOrder: 28,
    },
    {
      name: 'Разверзнется',
      id: 84,
      chronologicalOrder: 29,
    },
    {
      name: 'Мчащиеся',
      id: 100,
      chronologicalOrder: 30,
    },
    {
      name: 'Вырывающие',
      id: 79,
      chronologicalOrder: 31,
    },
    {
      name: 'Посылаемые',
      id: 77,
      chronologicalOrder: 32,
    },
    {
      name: 'Весть',
      id: 78,
      chronologicalOrder: 33,
    },
    {
      name: 'Покрывающее',
      id: 88,
      chronologicalOrder: 34,
    },
    {
      name: 'Заря',
      id: 89,
      chronologicalOrder: 35,
    },
    {
      name: 'Воскресение',
      id: 75,
      chronologicalOrder: 36,
    },
    {
      name: 'Обвешивающие',
      id: 83,
      chronologicalOrder: 37,
    },
    {
      name: 'Неизбежное',
      id: 69,
      chronologicalOrder: 38,
    },
    {
      name: 'Рассеивающие',
      id: 51,
      chronologicalOrder: 39,
    },
    {
      name: 'Гора',
      id: 52,
      chronologicalOrder: 40,
    },
    {
      name: 'Падающее',
      id: 56,
      chronologicalOrder: 41,
    },
    {
      name: 'Ступени',
      id: 70,
      chronologicalOrder: 42,
    },
    {
      name: 'Милосердный',
      id: 55,
      chronologicalOrder: 43,
    },
    {
      name: 'Очищение (Веры)',
      id: 112,
      chronologicalOrder: 44,
    },
    {
      name: 'Неверные',
      id: 109,
      chronologicalOrder: 45,
    },
    {
      name: 'Рассвет',
      id: 113,
      chronologicalOrder: 46,
    },
    {
      name: 'Люди',
      id: 114,
      chronologicalOrder: 47,
    },
    {
      name: 'Открывающая Книгу',
      id: 1,
      chronologicalOrder: 48,
    },
    {
      name: 'Месяц',
      id: 54,
      chronologicalOrder: 49,
    },
    {
      name: 'Стоящие В Ряд',
      id: 37,
      chronologicalOrder: 50,
    },
    {
      name: 'Нух',
      id: 71,
      chronologicalOrder: 51,
    },
    {
      name: 'Человек',
      id: 76,
      chronologicalOrder: 52,
    },
    {
      name: 'Дым',
      id: 44,
      chronologicalOrder: 53,
    },
    {
      name: 'Каф',
      id: 50,
      chronologicalOrder: 54,
    },
    {
      name: 'Та Ха',
      id: 20,
      chronologicalOrder: 55,
    },
    {
      name: 'Поэты',
      id: 26,
      chronologicalOrder: 56,
    },
    {
      name: 'Ал-Хиджр',
      id: 15,
      chronologicalOrder: 57,
    },
    {
      name: 'Марйам',
      id: 19,
      chronologicalOrder: 58,
    },
    {
      name: 'Сад',
      id: 38,
      chronologicalOrder: 59,
    },
    {
      name: 'Йа Син',
      id: 36,
      chronologicalOrder: 60,
    },
    {
      name: 'Украшения',
      id: 43,
      chronologicalOrder: 61,
    },
    {
      name: 'Джинны',
      id: 72,
      chronologicalOrder: 62,
    },
    {
      name: 'Власть',
      id: 67,
      chronologicalOrder: 63,
    },
    {
      name: 'Верующие',
      id: 23,
      chronologicalOrder: 64,
    },
    {
      name: 'Пророки',
      id: 21,
      chronologicalOrder: 65,
    },
    {
      name: 'Различение',
      id: 25,
      chronologicalOrder: 66,
    },
    {
      name: 'Перенес Ночью',
      id: 17,
      chronologicalOrder: 67,
    },
    {
      name: 'Муравьи',
      id: 27,
      chronologicalOrder: 68,
    },
    {
      name: 'Пещера',
      id: 18,
      chronologicalOrder: 69,
    },
    {
      name: 'Поклон',
      id: 32,
      chronologicalOrder: 70,
    },
    {
      name: 'Разъяснены',
      id: 41,
      chronologicalOrder: 71,
    },
    {
      name: 'Коленопреклоненная',
      id: 45,
      chronologicalOrder: 72,
    },
    {
      name: 'Пчелы',
      id: 16,
      chronologicalOrder: 73,
    },
    {
      name: 'Румы',
      id: 30,
      chronologicalOrder: 74,
    },
    {
      name: 'Худ',
      id: 11,
      chronologicalOrder: 75,
    },
    {
      name: 'Ибрахим',
      id: 14,
      chronologicalOrder: 76,
    },
    {
      name: 'Йусуф',
      id: 12,
      chronologicalOrder: 77,
    },
    {
      name: 'Верующий',
      id: 40,
      chronologicalOrder: 78,
    },
    {
      name: 'Рассказ',
      id: 28,
      chronologicalOrder: 79,
    },
    {
      name: 'Толпы',
      id: 39,
      chronologicalOrder: 80,
    },
    {
      name: 'Паук',
      id: 29,
      chronologicalOrder: 81,
    },
    {
      name: 'Лукман',
      id: 31,
      chronologicalOrder: 82,
    },
    {
      name: 'Совет',
      id: 42,
      chronologicalOrder: 83,
    },
    {
      name: 'Йунус',
      id: 10,
      chronologicalOrder: 84,
    },
    {
      name: 'Саба',
      id: 34,
      chronologicalOrder: 85,
    },
    {
      name: 'Ангелы',
      id: 35,
      chronologicalOrder: 86,
    },
    {
      name: 'Преграды',
      id: 7,
      chronologicalOrder: 87,
    },
    {
      name: 'Пески',
      id: 46,
      chronologicalOrder: 88,
    },
    {
      name: 'Скот',
      id: 6,
      chronologicalOrder: 89,
    },
    {
      name: 'Гром',
      id: 13,
      chronologicalOrder: 90,
    },
    {
      name: 'Корова',
      id: 2,
      chronologicalOrder: 91,
    },
    {
      name: 'Ясное Знамение',
      id: 98,
      chronologicalOrder: 92,
    },
    {
      name: 'Взаимное Обманывание',
      id: 64,
      chronologicalOrder: 93,
    },
    {
      name: 'Собрание',
      id: 62,
      chronologicalOrder: 94,
    },
    {
      name: 'Добыча',
      id: 8,
      chronologicalOrder: 95,
    },
    {
      name: 'Мухаммад',
      id: 47,
      chronologicalOrder: 96,
    },
    {
      name: 'Семейство Имрана',
      id: 3,
      chronologicalOrder: 97,
    },
    {
      name: 'Ряды',
      id: 61,
      chronologicalOrder: 98,
    },
    {
      name: 'Железо',
      id: 57,
      chronologicalOrder: 99,
    },
    {
      name: 'Женщины',
      id: 4,
      chronologicalOrder: 100,
    },
    {
      name: 'Развод',
      id: 65,
      chronologicalOrder: 101,
    },
    {
      name: 'Сбор',
      id: 59,
      chronologicalOrder: 102,
    },
    {
      name: 'Сонмы',
      id: 33,
      chronologicalOrder: 103,
    },
    {
      name: 'Лицемеры',
      id: 63,
      chronologicalOrder: 104,
    },
    {
      name: 'Свет',
      id: 24,
      chronologicalOrder: 105,
    },
    {
      name: 'Препирательство',
      id: 58,
      chronologicalOrder: 106,
    },
    {
      name: 'Хадж',
      id: 22,
      chronologicalOrder: 107,
    },
    {
      name: 'Победа',
      id: 48,
      chronologicalOrder: 108,
    },
    {
      name: 'Запрещение',
      id: 66,
      chronologicalOrder: 109,
    },
    {
      name: 'Испытуемая',
      id: 60,
      chronologicalOrder: 110,
    },
    {
      name: 'Помощь',
      id: 110,
      chronologicalOrder: 111,
    },
    {
      name: 'Комнаты',
      id: 49,
      chronologicalOrder: 112,
    },
    {
      name: 'Покаяние',
      id: 9,
      chronologicalOrder: 113,
    },
    {
      name: 'Трапеза',
      id: 5,
      chronologicalOrder: 114,
    },
  ];

  await Promise.all(
    data.map(async (item) => {
      await prisma.chapter.create({
        data: item,
      });
    }),
  );

  await Promise.all(
    [
      {
        author: 'Кулиев Эльмир',
        id: 1,
      },
      {
        author: 'Крачковский Игнатий',
        id: 2,
      },
    ].map(async (item) => {
      await prisma.translation.create({
        data: item,
      });
    }),
  );

  // await Promise.all(
  //   kk.map(async (item) => {
  //     await prisma.verse.create({
  //       data: item,
  //     });
  //   }),
  // );

  await Promise.each(kk, async (item) => {
    await prisma.verse.create({
      data: item,
    });
  });

  await Promise.each(dd, async (item) => {
    await prisma.verse.create({
      data: item,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
