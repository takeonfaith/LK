import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CenterPage, Title } from '@ui/atoms';
import BlockWrapper from '@ui/block/styles';
import { LocalSearch } from '@ui/molecules';
import { Slider } from 'widgets';

const pages = {
  0: [
    {
      title: 'Учёба',
      links: [
        { title: 'Промежуточная аттестация', href: 'https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf', },
        { title: 'Оплата обучения', href: 'https://mospolytech.ru/?id=2042', },
        { title: 'Международные программы', href: 'https://mospolytech.ru/?id=8', },
        { title: 'Дополнительное образование', href: 'https://mospolytech.ru/?id=92', },
      ],
    },
    {
      title: 'Наука',
      links: [
        { title: 'Анонсы научных мероприятий', href: 'https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/', },
        { title: 'Как получить патент', href: '#', },
        { title: 'Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации', href: 'https://www.elsevier.com', },
        { title: 'Список низкорейтинговых журналов', href: '#', },
        { title: 'SciVal онлайн-платформа для мониторинга и анализа международных научных исследований', href: 'https://www.scival.com/landing', },
      ],
    },
    {
      title: 'Внеучебная деятельность',
      links: [
        { title: 'Спортивная деятельность', href: 'https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf', },
        { title: 'Расписание спортивных секций', href: 'https://mospolytech.ru/?id=1482', },
        { title: 'Студенческая жизнь', href: 'https://mospolytech.ru/?id=669', },
        { title: 'Профорганизация', href: 'https://profkommospolytech.ru', },
        { title: 'Студенческое научно-техническое общество', href: 'http://snto.mospolytech.ru', },
        { title: 'Формула Студент', href: 'http://fdr.mospolytech.ru', },
        { title: 'Медицинское обслуживание', href: 'https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/', },
        { title: 'Центр подготовки водителей (автошкола)', href: 'https://mospolytech.ru/dop-obrazovanie/avtoshkola/', },
        { title: 'Яхт-клуб', href: 'https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/', },
      ],
    },
  ],
  1: [
    {
      title: 'Инструкции',
      links: [
        { title: 'Инструкция по получению логина и пароля единой учётной записи студентов первого курса', href: 'https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1', },
        { title: 'Инструкции', href: 'https://e.mospolytech.ru/old/index.php?p=instructions', },
        { title: 'Где найти коворкинги - там есть WiFi, столы, пуфы и розетки', href: 'https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf', },
      ],
    },
  ],
  2: [
    {
      title: 'Курсы',
      links: [
        { title: 'Современного курсостроения', href: 'https://project.lektorium.tv/howtomooc', },
      ],
    },
  ],
} as {
  [page: number]: {
    title: string;
    links: {
      title: string;
      href: string;
    }[];
  }[]
};

const CustomBlock = styled(BlockWrapper)`
  align-items: flex-start;

  .wrapper {
    display: flex;
    gap: 20px;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--blue);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ContentBlock = styled.div`
  flex: 1 1 auto;
  margin-right: 20px;
  margin-top: 20px;
  background: #FFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 24px;
`;

const CustomLink = styled.a`
  display: block;
  font-size: 18px;
  line-height: 22px;
  margin-top: 20px;
`;

const HelpfulInformation = () => {
  const [page, setPage] = useState<number>(0);

  const pageBlocks = pages[page];

  return (
    <CenterPage
      alignItems="flex-start"
      padding="10px"
    >
      <CustomBlock
        orientation="vertical"
        gap="10px"
        maxWidth="1225px"
        height="fit-content"
      >
        <Title size={2} align="left">
          Полезная информация
        </Title>
        <LocalSearch<any, any>
          placeholder="Поиск документов "
          whereToSearch={{}}
          searchEngine={() => {}}
          setResult={() => {}}
        />
        <Slider
          pages={[
              {
                  title: 'Полезная информация',
              },
              {
                  title: 'Инструкции',
              },
              {
                  title: 'Курсы',
              },
          ]}
          currentPage={page}
          setCurrentPage={setPage}
        />
        <ContentWrapper>
          {pageBlocks.map(({ title, links }) => (
            <ContentBlock>
              <Title size={3} align="left">
                {title}
              </Title>
              <div>
                {links.map(({ title: linkTitle, href }) => (
                  <CustomLink href={href} target="_blank">{linkTitle}</CustomLink>
                ))}
              </div>
            </ContentBlock>
          ))}      
        </ContentWrapper>
      </CustomBlock>
    </CenterPage>
  );
};

export default HelpfulInformation;
