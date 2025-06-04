## 📝 Mood Cloud 프로젝트 회고록

### 👨‍👩‍👧‍👦 팀원 소개 및 역할

| 이름 | 역할 | 주요 담당 업무 |
|------|------|----------------|
| 김지은 (팀장) | 프로젝트 기획 / 앱 프론트엔드 / 앱 백엔드 | 전체 기획, 앱 화면 구성 및 기능 구현 |
| 이상암 | 웹 프론트엔드 / 웹 백엔드 | 로그인 페이지, 메인 페이지, 수정 페이지, 글쓰기 페이지, 글 상세 페이지, 마이페이지 |
| 구다경 | 웹 프론트엔드 / 웹 백엔드 | 리스트 페이지, 내 정보 수정 페이지, 통계 페이지 |

---
### 📌 프로젝트 소개

사람들은 자신의 감정을 말로 표현하거나 객관적으로 바라보는 데 익숙지 않습니다.  
하루를 살아내는 데 집중하다 보면 감정은 흘러보내기 쉽고,  
그러다 보면 스스로의 마음을 놓치게 됩니다.  
**Mood Cloud**는 이러한 사용자를 위해 AI가 일기 내용을 분석해 몰랐던 나의 감정까지 발견할 수 있도록 도와주며,  
감정의 흐름을 시각적으로 확인할 수 있어 나를 더 깊이 이해할 수 있게 합니다.  
또한 감정을 기반으로 친구들과 감정을 공유하고 공감하는 커뮤니케이션을 경험할 수 있어,  
타인의 감정도 헤아릴 수 있는 공간을 제공합니다.

---

### 🛠 기술 스택
## 프론트엔드
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)
![Toast UI Editor](https://img.shields.io/badge/Toast_UI_Editor-0097E0?style=flat)
## 백엔드
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white)

## 협업툴 및 라이브러리
![OpenAI API](https://img.shields.io/badge/OpenAI_API-412991?style=flat&logo=openai&logoColor=white)
![Kakao Login](https://img.shields.io/badge/Kakao_Login-FFCD00?style=flat&logo=KakaoTalk&logoColor=black)
![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white)
---



### 팀 전체 회고

#### 잘한 점
- 빠른 주제 설정
- 프론트 아토믹 패턴으로 빨리나누고 빠르게 프론트 완성

#### 아쉬운 점
- 배포환경에서의 오류  
- 완벽하지 않은 웹페이지

#### 배운 점
- 아토믹 패턴을 사용하면 재사용이 좋아서 더 빠르게 페이지를 뽑아낼 수 있다.  
- 협업이라는게 어렵다는걸 느꼈고 잘 맞쳐나가는게 좋은것이라는것을 깨달았다.


---

### 💡 다음 프로젝트에 적용할 점
- 더욱 깔끔한 디자인  
- 맡은 기능의 완벽함
- 추가적인 꼭 필요한 기능(임시저장 등)

---


### 🎬 기능 소개

<img src="./gif/Honeycam 2025-06-04 13-18-43.gif" width="600">

- **로그인 페이지**  
  카카오로그인으로 로그인을 하지 않으면 메인으로 넘어갈 수 없다.

- **메인 페이지**  
  전반적인 컴포넌트들을 들어갈 수 있는 곳입니다.

- **글쓰기 페이지**  
  글을 쓰는 곳으로 이미지를 넣을 수 있고, 작성하면 AI 검사를 통해 감정을 분석하고  
  공개와 비공개 설정을 할 수 있다.

---

<img src="./gif/Honeycam 2025-06-04 13-21-59.gif" width="600">

- **상세 페이지**  
  작성한 글을 상세하게 볼 수 있고, 수정도 가능하다.  
  또한 팔로우 기능이 있으며, 댓글 작성 기능도 포함되어 있다.

- **수정 페이지**  
  기존 글과 이미지를 수정할 수 있으며, 수정 시 다시 AI 감정 분석을 수행한다.

---

<img src="./gif/Honeycam 2025-06-04 13-25-54.gif" width="600">

- **마이페이지**  
  내가 쓴 글과 스트릭(스트림) 등을 볼 수 있고,  
  다른 사람의 마이페이지에 들어가면 **팔로우 여부에 따라 접근이 다르다**.  

  - 팔로우한 경우: 친구의 공개된 글들을 볼 수 있음  
  - 팔로우하지 않은 경우: 블라인드 처리가 되어 내용을 볼 수 없음  

  다른 사람의 마이페이지에 들어가려면 **검색창에 그 사람의 이름을 입력해야 한다**.
---
### 최종 후기
- 많이 힘들었지만 배운게 많았고 저의 아쉽움도 돌아보게 되었습니다. 


