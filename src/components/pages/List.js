import React, { useState } from 'react';
import Header from '../templates/Header';
import styled from 'styled-components';
import ListItem from '../molecules/List/Listitem';
import Listheader from '../tamplate/List/Listheader';
import Listselectwarp from '../tamplate/List/Listselectwarp';
import { myDiaryData, publicDiaryData } from '../../data/Dummydiarydata';

const ListPageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const DiaryContentWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;
`;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 6px;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  background: ${({ active }) => (active ? '#b881c2' : '#eee')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RecordListPage = () => {
  const [selectTab, setSelectTab] = useState('mydiary');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const selectedData = selectTab === 'mydiary' ? myDiaryData : publicDiaryData;
  const totalPages = Math.ceil(selectedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectedData.slice(indexOfFirstItem, indexOfLastItem);

  const visiblePageCount = 5;
  const currentGroup = Math.floor((currentPage - 1) / visiblePageCount);
  const startPage = currentGroup * visiblePageCount + 1;
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);

  const isPrevGroupAvailable = startPage > 1;
  const isNextGroupAvailable = endPage < totalPages;

  const goToPrevGroup = () => {
    if (isPrevGroupAvailable) {
      setCurrentPage(startPage - 1);
    }
  };

  const goToNextGroup = () => {
    if (isNextGroupAvailable) {
      setCurrentPage(endPage + 1);
    }
  };

  return (
    <ListPageWrap>
      <Header />
      <Listheader selectTab={selectTab} />
      <Listselectwarp onClick={(tab) => {
        setSelectTab(tab);
        setCurrentPage(1);
      }}
        selectTab={selectTab}

      />
      <DiaryContentWrap>
        {currentItems.map(item => (
          <ListItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            type={item.type}
            author={item.author}
            emotion={item.emotion}
          />
        ))}
      </DiaryContentWrap>

      <PaginationWrap>
        <PageButton onClick={goToPrevGroup} disabled={!isPrevGroupAvailable}>
          ◀
        </PageButton>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <PageButton
            key={startPage + i}
            active={currentPage === startPage + i}
            onClick={() => setCurrentPage(startPage + i)}
          >
            {startPage + i}
          </PageButton>
        ))}

        <PageButton onClick={goToNextGroup} disabled={!isNextGroupAvailable}>
          ▶
        </PageButton>
      </PaginationWrap>
    </ListPageWrap>
  );
};

export default RecordListPage;
