import React, { useEffect, useState } from "react";
import { FiSearch, FiUsers } from "react-icons/fi";
import styled from "styled-components";
import { WeekDayButton, WeekSchedule } from "../../features/schedule/ui";
import Slider from "../../features/slider/molecules/slider";
import { IWeekSchedule } from "../../shared/api/model";
import { Input, Wrapper } from "../../shared/ui/atoms";

const SchedulePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  .slider-wrapper {
    width: 100%;
    max-width: 400px;
    font-size: 0.8em;
  }
`;

const SchedulePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [value, setValue] = useState("191-722");
  const schedule = {
    "0": {
      monday: {
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
  };

  return (
    <Wrapper loading={loading}>
      <SchedulePageContent>
        <div className="slider-wrapper">
          <Slider
            pages={["Первый модуль", "Второй модуль"]}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Input
          value={value}
          setValue={setValue}
          placeholder="Номер группы"
          leftIcon={!!value.length ? <FiUsers /> : <FiSearch />}
        />
        <WeekSchedule
          weekSchedule={
            schedule[
              currentPage.toString() as keyof {
                "0": IWeekSchedule;
                "1": IWeekSchedule;
              }
            ]
          }
        />
      </SchedulePageContent>
    </Wrapper>
  );
};

export default SchedulePage;
