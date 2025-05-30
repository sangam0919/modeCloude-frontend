// EmotionCalendar.js (완성본)
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일은 필요에 따라 사용
import Emotion from '../../atoms/Emotion';
import styled from 'styled-components';
// Card 아톰 import (만약 CalendarContainer가 Card를 확장한다면 필요, 아니면 제거)
// import Card from '../../atoms/Card';

// 스타일 컴포넌트
const CalendarContainer = styled.div`
  width: 600px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* 카드 스타일 원하시면 추가 */
  background-color: white; /* 카드 스타일 원하시면 추가 */
  border-radius: 16px; /* 카드 스타일 원하시면 추가 */
  padding: 20px; 
.react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus
 {
    background: none;
}
  .custom-calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .nav-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0 10px;
    color: #333;
  }
  .week-label { // 이 클래스명은 현재 JSX에서 사용되지 않으므로, 월/주 표시 부분의 스타일 식별자로 사용하려면 수정 필요
    flex-grow: 1;
    text-align: center;
  }
  // h3 제목 스타일링 (선택적)
  .calendar-title-heading {
    margin-bottom: 10px;
    text-align: center;
    font-size: 1rem; /* 이미지에서 "주간 감정 달력" 글씨 크기와 유사하게 */
    color: #555;
    font-weight: normal; /* 이미지에서는 bold가 아닌 것 같음 */
  }
`;

const CalendarWarp = styled(Calendar)`
  border: none;
  background: transparent;
  font-family: inherit;

  .react-calendar__navigation {
    display: none; // 기본 네비게이션 숨김 (커스텀 네비게이션 사용)
  }

  .react-calendar__month-view__weekdays {
    abbr {
      text-decoration: none;
      font-weight: normal;
      color: #666;
      font-size: 0.85rem;
    }
  }

  .react-calendar__month-view__days__day {
    padding: 5px 0;
    border-radius: 12px;
    background: white;
    border: 1px solid #f0f0f0;
    transition: background 0.2s;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9rem;
    color: #333;
  }
  .react-calendar__month-view__days__day abbr {
    margin-top: 8px;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__tile:disabled { // 비활성화된 날짜 (이웃 달 또는 tileDisabled로 비활성화)
      opacity: 0.4;
      // background-color: #f8f8f8; // 필요시 배경색도 약간 다르게
  }

  .react-calendar__tile:hover:not(:disabled) { // 비활성화되지 않은 타일에만 호버 효과
    background: #e9e9e9;
  }

  .react-calendar__tile--now {
    background: #f0f8ff;
    font-weight: bold; // 오늘 날짜는 강조
  }
  .react-calendar__tile--now:hover:not(:disabled) {
    background: #dceeff; // 오늘 날짜 호버 시
  }
`;

// 날짜를 'YYYY.MM.DD' 형식으로 변환
const formatDateToDots = (dateObj) => {
    if (!(dateObj instanceof Date && !isNaN(dateObj))) return "유효하지 않은 날짜";
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
};

// 주의 시작일(월요일 기준)과 7일간의 날짜 배열을 반환
const getWeekDays = (dateInWeek) => {
    if (!(dateInWeek instanceof Date && !isNaN(dateInWeek))) return [];
    const startDate = new Date(dateInWeek);
    const dayOfWeek = startDate.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    
    const monday = new Date(startDate);
    monday.setDate(startDate.getDate() + diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const week = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(monday);
        day.setDate(monday.getDate() + i);
        week.push(day);
    }
    return week;
};

const EmotionCalendar = ({ emotionDataForCalendar, currentActiveStartDate, onCalendarNavigate, currentSelectTab }) => {
    const emotionMap = {};
    if (emotionDataForCalendar) {
        emotionDataForCalendar.forEach((entry) => {
            if (entry && typeof entry.date === 'string' && entry.emotion) { // 방어 코드
                emotionMap[entry.date] = entry.emotion;
            }
        });
    }

    // currentActiveStartDate가 유효한 Date 객체인지 먼저 확인
    const isValidDate = currentActiveStartDate instanceof Date && !isNaN(currentActiveStartDate);
    const weekDays = isValidDate ? getWeekDays(currentActiveStartDate) : [];
    const firstDayOfWeek = weekDays.length > 0 ? weekDays[0] : null;
    const lastDayOfWeek = weekDays.length > 0 ? weekDays[6] : null;

    const handlePrevNavigation = () => {
        if (!isValidDate || !onCalendarNavigate) return;
        if (currentSelectTab === 'weeklytab') {
            const prevWeekStartDate = new Date(currentActiveStartDate);
            prevWeekStartDate.setDate(currentActiveStartDate.getDate() - 7);
            onCalendarNavigate(prevWeekStartDate);
        } else { // monthlytab 등 다른 탭
            onCalendarNavigate(new Date(currentActiveStartDate.getFullYear(), currentActiveStartDate.getMonth() - 1, 1));
        }
    };

    const handleNextNavigation = () => {
        if (!isValidDate || !onCalendarNavigate) return;
        if (currentSelectTab === 'weeklytab') {
            const nextWeekStartDate = new Date(currentActiveStartDate);
            nextWeekStartDate.setDate(currentActiveStartDate.getDate() + 7);
            onCalendarNavigate(nextWeekStartDate);
        } else { // monthlytab 등 다른 탭
            onCalendarNavigate(new Date(currentActiveStartDate.getFullYear(), currentActiveStartDate.getMonth() + 1, 1));
        }
    };

    const renderTileContent = ({ date, view }) => {
        if (view !== 'month' || !isValidDate) return null;

        let showEmotion = true;
        if (currentSelectTab === 'weeklytab') {
            // 시간이 제거된 날짜로 비교
            const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const normalizedFirstDay = firstDayOfWeek ? new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate()) : null;
            const normalizedLastDay = lastDayOfWeek ? new Date(lastDayOfWeek.getFullYear(), lastDayOfWeek.getMonth(), lastDayOfWeek.getDate()) : null;

            if (!normalizedFirstDay || !normalizedLastDay || !(normalizedDate >= normalizedFirstDay && normalizedDate <= normalizedLastDay)) {
                showEmotion = false; // 현재 주가 아니면 이모티콘 표시 안함
            }
        }

        if (!showEmotion) return <div style={{ height: '28px' }}></div>; // 이모티콘 안보여줄 때도 공간 유지

        const dateKeyForComparison = formatDateToDots(date);
        const emotion = emotionMap[dateKeyForComparison];

        return emotion ? (
            <div style={{ marginTop: 8, textAlign: 'center', lineHeight: 1 }}>
                <Emotion type={emotion} size={24} />
            </div>
        ) : (
            <div style={{ height: '28px' }}></div>
        );
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month' && currentSelectTab === 'weeklytab' && isValidDate && firstDayOfWeek && lastDayOfWeek) {
            const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
             // firstDayOfWeek, lastDayOfWeek는 이미 시간이 00:00:00 또는 23:59:59로 설정된 상태로 getWeekDays에서 반환됨
             // 하지만 비교 일관성을 위해 여기서도 시간 제거
            const normalizedFirstDay = new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate());
            const normalizedLastDay = new Date(lastDayOfWeek.getFullYear(), lastDayOfWeek.getMonth(), lastDayOfWeek.getDate());
            return !(normalizedDate >= normalizedFirstDay && normalizedDate <= normalizedLastDay);
        }
        return false;
    };

    const formatHeaderLabel = () => {
        if (!isValidDate) return "날짜 정보 로딩 중...";
        if (currentSelectTab === 'weeklytab' && firstDayOfWeek && lastDayOfWeek) {
            const startMonth = firstDayOfWeek.getMonth() + 1;
            const startDateVal = firstDayOfWeek.getDate();
            const endMonth = lastDayOfWeek.getMonth() + 1;
            const endDateVal = lastDayOfWeek.getDate();
            const year = firstDayOfWeek.getFullYear();

            if (startMonth === endMonth) {
                return `${year}년 ${startMonth}월 ${startDateVal}일 - ${endDateVal}일`;
            } else {
                // 연도가 바뀔 경우도 고려 (예: 12월 말 ~ 1월 초)
                const endYear = lastDayOfWeek.getFullYear();
                if (year !== endYear) {
                     return `${year}년 ${startMonth}월 ${startDateVal}일 - ${endYear}년 ${endMonth}월 ${endDateVal}일`;
                }
                return `${year}년 ${startMonth}월 ${startDateVal}일 - ${endMonth}월 ${endDateVal}일`;
            }
        } else { // monthlytab 또는 다른 탭
            return `${currentActiveStartDate.getFullYear()}년 ${currentActiveStartDate.getMonth() + 1}월`;
        }
    };

    return (
        <CalendarContainer>
            <h3 className="calendar-title-heading">
                {currentSelectTab === 'weeklytab' ? "주간 감정 달력" : "월간 감정 달력"}
            </h3>
            <div className="custom-calendar-header">
                <span style={{ flexGrow: 1, textAlign: 'center', display: 'flex', justifyContent: "center", alignItems: "center", gap: "5px" }}> {/* .week-label 대신 인라인 스타일 사용 또는 클래스명 적용 */}
                <button onClick={handlePrevNavigation} className="nav-button">◀</button>
                    {formatHeaderLabel()}
                <button onClick={handleNextNavigation} className="nav-button">▶</button>
                </span>
            </div>
            <CalendarWarp
                activeStartDate={isValidDate ? currentActiveStartDate : new Date()} // 유효하지 않으면 오늘 날짜로 fallback (오류 방지)
                onActiveStartDateChange={({ activeStartDate: newActiveDate, view }) => {
                    // react-calendar 자체 네비게이션(예: 스와이프)에 의한 변경 시 호출
                    if (view === 'month' && onCalendarNavigate) { // 월 보기에서만 반응
                        onCalendarNavigate(newActiveDate);
                    }
                }}
                tileContent={renderTileContent}
                tileDisabled={tileDisabled}
                formatDay={(locale, date) => date.getDate().toString()}
                locale="ko-KR"
                prev2Label={null}
                next2Label={null}
                // 주간 탭일 때는 이웃 달 날짜 안보이게, 월간일때는 보이게 할 수 있음
                showNeighboringMonth={currentSelectTab !== 'weeklytab'}
            />
        </CalendarContainer>
    );
};

export default EmotionCalendar;