import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../templates/Header';
import ListItem from '../molecules/List/Listitem';
import Listheader from '../templates/List/Listheader';
import Listselectwarp from '../templates/List/Listselectwarp';
import useInput from '../../hooks/useInput'; // useInput 훅 경로 확인 필요
import axios from 'axios';
import { API_URL } from '../../constants/api'; // API_URL 경로 확인 필요
import Text from '../atoms/Text';
import { Link } from 'react-router-dom';

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
  .empty-message {
    text-align: center;
    padding: 40px 20px;
    color: #777;
    font-size: 1rem;
  }
  a{
    text-decoration : none;
  }
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
  const [selectTab, setSelectTab] = useState('mydiary'); // 'mydiary', 'publicdiary'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [emotion, setEmotion] = useState('전체');
  const [order, setOrder] = useState('desc');
  const [ispublic, setIsPublic] = useState('전체'); // '내 일기' 탭에서 사용될 공개 여부 필터
  const [value, setValueHandler, setValue] = useInput(''); // useInput 훅의 반환값에 맞게 수정

  const [myDiaryDatarel, setMyDiaryDatarel] = useState([]);

  // --- 페이지네이션 로직 ---
  const totalItems = myDiaryDatarel.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDisplayItems = myDiaryDatarel.slice(indexOfFirstItem, indexOfLastItem);

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
  // --- 페이지네이션 로직 끝 ---
  const stripHtmlTagsAndImages = (text) => {
    if (!text) return '';
    // 1. 마크다운 이미지 제거
    let cleaned = text.replace(/!\[.*?\]\(.*?\)/g, '');
    // 2. HTML 태그 제거
    cleaned = cleaned.replace(/<[^>]*>?/gm, '');
    return cleaned;
  };

  const dataQuery = (paramName, initValue, currentValue) => {
    // 값이 있고, 초기값이나 "전체"가 아닐 때만 쿼리 파라미터 생성
    if (currentValue && currentValue !== initValue && currentValue !== "전체") {
      return `${paramName}=${encodeURIComponent(currentValue)}`;
    }
    return "";
  };

  const getListData = async () => {
    const commonQueries = [
      dataQuery("emotion", "전체", emotion),
      dataQuery("order", "desc", order), // "최신순"에 해당하는 실제 값 'desc' 사용
      dataQuery("title", "", value)
    ].filter(q => q).join("&");

    let apiUrlSegment = "/list"; // 기본 API 경로 (내 일기)
    let specificQueries = "";

    if (selectTab === 'publicdiary') {
      // "모두의 일기" 탭은 팔로우한 사용자들의 일기를 가져옴
      apiUrlSegment = "/list/followed"; // 백엔드에 이 엔드포인트 구현 필요
      // 'public' 필터는 이 경우 프론트에서 보내지 않음
      // (백엔드가 팔로우된 사람의 '공개' 일기만 필터링 가정)
    } else { // 'mydiary' (내 일기)
      apiUrlSegment = "/list";
      // '내 일기' 탭에서는 사용자가 선택한 '공개/비공개' 필터 적용
      specificQueries = dataQuery("public", "전체", ispublic);
    }
    
    const allQueries = [commonQueries, specificQueries].filter(q => q).join("&");
    // 쿼리 문자열이 있을 경우에만 '?' 추가
    const queryString = allQueries ? `?${allQueries}` : '';
    const fullApiUrl = `${API_URL}${apiUrlSegment}${queryString}`;

    try {
      console.log(`Fetching from: ${fullApiUrl} for tab: ${selectTab}`);
      const { data } = await axios.get(fullApiUrl, { withCredentials: true });
      setMyDiaryDatarel(data || []); // API 응답이 null/undefined일 경우 빈 배열로 안전하게 처리
      setCurrentPage(1); // 새 데이터 로드 시 항상 첫 페이지로 이동
    } catch (error) {
      console.error(`Error fetching list data for tab ${selectTab}:`, error);
      setMyDiaryDatarel([]); // 에러 발생 시 데이터 비우기
    }
  };

  useEffect(() => {
    getListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emotion, order, ispublic, value, selectTab]); // ispublic은 '내 일기' 탭에서 주로 사용됨

  const getEmptyMessage = () => {
    if (selectTab === 'mydiary') {
      return '작성된 일기가 없습니다. 첫 일기를 작성해보세요!';
    }
    // "모두의 일기" 탭 (이제 팔로우 기준)
    if (selectTab === 'publicdiary') {
      return '팔로우한 사용자의 공개된 일기가 없거나, 아직 팔로우한 사용자가 없습니다.';
    }
    return '표시할 일기가 없습니다.'; // 기본 메시지 (실제로는 위 두 경우 중 하나에 해당됨)
  };

  return (
    <ListPageWrap>
      <Header />
      <Listheader selectTab={selectTab} />
      <Listselectwarp
        setEmotion={setEmotion}
        setorder={setOrder}
        setispublic={setIsPublic} // '공개' 필터 UI. 실제 API 적용은 '내 일기' 탭에서만.
        setvaluehandler={setValueHandler} // useInput 훅에서 반환된 핸들러
        onClick={(tab) => {
          setSelectTab(tab);
          // 탭 변경 시 필터 초기화 여부는 정책에 따라 결정
          // 예: setEmotion('전체'); setOrder('desc'); setIsPublic('전체'); setValue('');
        }}
        selectTab={selectTab}
      />
      <DiaryContentWrap>
        {currentDisplayItems.length > 0 ? (
          currentDisplayItems.map(diary => (
            <Link to={`/detail/${diary.id}`}>
              <ListItem
                key={diary.id}
                title={diary.title}
                description={stripHtmlTagsAndImages(diary.content)}
                date={new Date(diary.createdAt).toLocaleDateString()} // 날짜 형식 변환
                isPublic={diary.isPublic} // 아이콘 표시용
                // "모두의 일기" (팔로우) 탭에서는 API가 author 정보를 제공해야 함
                // diary.author가 존재하고, 그 안에 nickname이 있을 경우 사용
                author={(selectTab === 'publicdiary' && diary.author && diary.author.nickname) ? diary.author.nickname : null}
                userEmotion={diary.emotion}
                aiEmotion={diary.selectEmotion}
                />
            </Link>
          ))
        ) : (
          <div className="empty-message">
            <Text>{getEmptyMessage()}</Text>
          </div>
        )}
      </DiaryContentWrap>

      {totalItems > 0 && ( // 전체 아이템 수가 0보다 클 때만 페이지네이션 표시
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
      )}
    </ListPageWrap>
  );
};

export default RecordListPage;