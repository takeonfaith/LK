import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { IModules, ISchedule, ViewType } from "../../../shared/api/model";

const useSchedule = () => {
  return useStore($schedule);
};

const changeCurrentModule = createEvent<{ currentModule: number }>();
const changeView = createEvent<{ view: ViewType }>();
const changeCurrentChosenDay = createEvent<{ day: number }>();

const store: ISchedule = {
  schedule: {
    "0": {
      monday: {
        subjects: [
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      tuesday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      wednesday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "16:10 - 17:40",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      thursday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      friday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      saturday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
    },
    "1": {
      monday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Матeематика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      tuesday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      wednesday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      thursday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      friday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
      saturday: {
        subjects: [
          {
            timeInterval: "9:00 - 10:30",
            name: "Математика",
            place: "Webinar",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "10:40 - 12:10",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "12:20 - 13:50",
            name: "Технология кроссплатформенного программирования (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Программирование",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
          {
            timeInterval: "14:30 - 16:00",
            name: "Теория информационных процессов и систем (Лаб. работа)",
            place: "Пряники",
            teachers: ["Колесникова В. А.", "Ципенюк А. Б."],
            dateInterval: "4 сен - 1 нояб",
          },
        ],
      },
    },
  },
  currentModule: "0",
  currentDay: new Date().getDay(),
  currentChosenDay: new Date().getDay(),
  view: "full",
};

const $schedule = createStore<ISchedule>(store)
  .on(changeCurrentModule, (oldState, newState) => ({
    ...oldState,
    currentModule: newState.currentModule.toString() as keyof IModules,
  }))
  .on(changeView, (oldState, newState) => ({
    ...oldState,
    view: newState.view,
  }))
  .on(changeCurrentChosenDay, (oldState, newState) => ({
    ...oldState,
    currentChosenDay: newState.day,
  }));

export const selectors = {
  useSchedule,
};

export const events = {
  changeCurrentModule,
  changeView,
  changeCurrentChosenDay,
};
