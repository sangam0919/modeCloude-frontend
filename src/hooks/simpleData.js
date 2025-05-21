export const others = [
    {
      "nickname": "익명의 구름",
      "date": "2025.03.27",
      "title": "여행 중 만난 선인장 가게",
      "content": "우연히 들른 시장에서 발견한 작은 선인장 가게. 다양한 모양과 크기의 선인장들이 창가에 줄지어 있는 모습이 너무 ...",
      "likes": 24,
      "comments": 8,
      "views": 142,
      "emoji": "😊"
    },
    {
      "nickname": "구름 위의 꿈",
      "date": "2025.03.29",
      "title": "비 오는 날의 창가",
      "content": "오늘은 하루종일 비가 내렸다. 창가에 앉아 빗방울이 유리창을 타고 흘러내리는 모습을 바라보며 따뜻한 차 한 잔을...",
      "likes": 18,
      "comments": 5,
      "views": 98,
      "emoji": "😌"
    },
    {
      "nickname": "하늘빛 마음",
      "date": "2025.03.28",
      "title": "드디어 찾은 꿈의 직장",
      "content": "3개월간의 긴 취업 준비 끝에 드디어 원하던 회사의 최종 합격 통보를 받았다. 그동안의 노력이 헛되지 않았다는...",
      "likes": 32,
      "comments": 12,
      "views": 176,
      "emoji": "😍"
    },
    {
      "nickname": "별빛 속삭임",
      "date": "2025.03.26",
      "title": "일상 속 작은 행복",
      "content": "매일 지나다니는 길가에 피어난 작은 꽃들을 발견했다. 평소에는 그냥 지나쳤던 것들이 오늘은 유독 아름답게 보였다...",
      "likes": 15,
      "comments": 7,
      "views": 89,
      "emoji": "😌"
    }
  ]

 export const moods = [
    { mood: 'happy',   emoji: '😊', label: '행복' },
    { mood: 'sad',     emoji: '😢', label: '슬픔' },
    { mood: 'angry',   emoji: '😠', label: '분노' },
    { mood: 'calm',    emoji: '😌', label: '평온' },
    { mood: 'anxious', emoji: '😰', label: '불안' },
    { mood: 'tired',   emoji: '😴', label: '피곤' },
    { mood: 'excited', emoji: '🤩', label: '신남' },
    { mood: 'confused',emoji: '🤔', label: '혼란' },
  ];

  export const sample = [
    { id:1, date:'2025.03.29 토요일', title:'봄 날씨와 함께한 산책',
      preview:'오늘은 날씨가 정말 좋아서 오랜만에 한강공원에 산책을 나갔다...',
      moodColor:'#FFEAA7', moodLabel:'행복', visibility:'🌎 공개', likes:3, comments:1 },
    { id:2, date:'2025.03.28 금요일', title:'업무에 대한 고민',
      preview:'프로젝트 마감이 다가오는데 아직 해결하지 못한 문제가 있어서 걱정이다...',
      moodColor:'#C7CEEA', moodLabel:'불안', visibility:'🔒 비공개', likes:0, comments:0 },
    { id:3, date:'2025.03.27 목요일', title:'오랜만에 만난 친구',
      preview:'대학 때 친구를 오랜만에 만났다. 서로 많이 바빠서 자주 볼 수는 없지만...',
      moodColor:'#FFD8BE', moodLabel:'신남', visibility:'🌎 공개', likes:5, comments:2 },
    { id:4, date:'2025.03.26 수요일', title:'평화로운 하루',
      preview:'특별한 일은 없었지만, 평소보다 여유롭게 하루를 보냈다...',
      moodColor:'#B5EAD7', moodLabel:'평온', visibility:'🌎 공개', likes:2, comments:0 },
  ];
  

  export const diaryDetail = {
    id: 1,
    user_id: 101,
    nickname: '익명의 구름',
    title: '봄 날씨와 함께한 산책',
    content: `
  오늘은 날씨가 정말 좋아서 오랜만에 한강공원에 산책을 나갔다.
  벚꽃이 막 피기 시작해서 정말 예뻤다. 공원에는 많은 사람들이 나와 봄을 즐기고 있었고, 나도 그 속에서 평화로운 시간을 보냈다.
  
  요즘 일이 바빠서 자연을 느낄 여유가 없었는데, 이렇게 시간을 내서 나오니 마음이 한결 가벼워지는 기분이다.
  강가를 따라 천천히 걷다 보니 계절의 변화를 온전히 느낄 수 있었다. 겨울의 차가움이 가시고 봄의 따뜻함이 찾아오는 그 경계에 서 있는 기분이었다.
  
  산책하는 동안 좋아하는 음악을 들으며 생각도 정리하고, 오랜만에 여유를 즐겼다. 이런 시간이 더 자주 있었으면 좋겠다.
  일상에 쫓기다 보면 잊기 쉬운 소소한 행복이지만, 사실 이런 순간들이 삶에 활력을 불어넣는 것 같다.
  
  돌아오는 길에는 카페에 들러 따뜻한 차 한 잔과 함께 책을 읽었다. 
  평소에는 시간이 아깝다는 생각에 가만히 앉아있는 것도조차 불안했는데, 오늘은 그런 조급함 없이 여유를 즐길 수 있었다.
   앞으로도 이런 시간을 의식적으로 만들어야겠다.
    `,
    image: '/images/hanriver_cherry.jpg',
    tags: ['산책', '봄', '한강', '벚꽃', '여유'],
    date: '2025.03.29 토요일',
    is_public: true,
    emotion_id: 1, // 예: 행복
    suggested_emotion_id: 1,
    emoji: '😊',
    emotion_label: '행복',
    likes: 3,
    comments: [
      {
        id: 1,
        user: '하늘빛 마음',
        content: '저도 오늘 다녀왔는데 벚꽃이 정말 예쁘더라고요!',
        created_at: '2025-03-29 15:21',
      }
    ],
    created_at: '2025-03-29T10:00:00',
    updated_at: '2025-03-29T10:00:00',
  };
  
  export const allDiaries = [
    { emoji: '🤩', title: '벚꽃 축제 다녀온 날', date: '2024.04.12', mood: 'excited' },
    { emoji: '😌', title: '주말 한강 소풍', date: '2024.05.22', mood: 'calm' },
    { emoji: '😊', title: '봄비가 그친 후의 산책', date: '2025.03.15', mood: 'happy' },
    { emoji: '😊', title: '좋은 날의 기억', date: '2025.03.10', mood: 'happy' },
    { emoji: '😊', title: '햇살 가득한 오후', date: '2025.03.12', mood: 'happy' },
    { emoji: '😌', title: '차분한 오후', date: '2024.06.01', mood: 'calm' },
  ];
  