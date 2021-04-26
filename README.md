### Next.js로 포트폴리오를 작성해보자!

프로젝트 기간 : 21.04.02 ~ (기본 틀 완료 및 수정 중)

#### 1. 이 프로젝트에서 진행할 것

- [x] (진행 중) 포트폴리오의 작성
- [ ] ~~**(변경)** 개별 프로젝트를 페이지로 분할~~
- [x] **(대체)** 프로젝트 페이지 내에 깃헙 링크와 실제 페이지를 아이콘 형식으로 배치
- [ ] ~~**(변경)** 공부했던 것들을 블로그 형식의 페이지로 분할~~
- [x] **(대체)** 기술 스택을 카드 리스트로 변경
- [x] **(추가)** 태니지먼트의 성격 진단 결과를 페이지로 추가
- [x] 성격 페이지의 반응형 조절 (이미지 및 텍스트 사이즈 조절)
- [x] **(리팩토링)** 기술 스택의 카드를 재사용 가능한 컴포넌트로 변경
- [x] **(추가)** 다언어(일본어, 영어, 한국어) 표기를 위한 셀렉트 박스 생성
- [x] **(추가)** 페이지 별 텍스트를 json 파일로 추가
- [ ] **(추가)** 각 페이지별 다국어 적용

#### 2. 레이아웃과 사이드 프로필 바 생성 (21. 04. 02)

- 레이아웃으로 내비게이션 바를 생성하고 프로필, 기술 스택, 프로젝트 용 페이지로 이동할 수 있게끔 라우팅 설정
- 사이드 프로필 바에 프로필 이미지를 넣고 GitHub 링크를 연동

#### 3. 기술 스택을 카드 형식의 리스트로 작성 (21. 04. 03)

- tailwindcss의 템플릿을 사용하여 카드 형식의 리스트가 담긴 페이지를 작성

#### 4. 기본적인 프로필 페이지를 작성 (21. 04. 04)

#### 5. 페이지를 반응형으로 변경 (진행중)

- 모바일 뷰에서는 SideProfile에 프로필 캐릭터와 깃헙 아이콘만 뜨도록 함
- 웹 뷰는 flex-col로, 모바일 뷰는 flex-row로 분리하여 정렬
- window.innerWidth를 사용하기 위해 type guard를 적용

```javascript
useEffect(() => {
  if (typeof window !== 'undefined') {
    // detect window screen width function
    setWidth(window.innerWidth)
  }
}, [])
```

#### 6. 프로젝트 리스트 페이지의 추가

#### 7. 기술 스택 페이지와 프로젝트 리스트 페이지의 성능 검사

   <image src="https://user-images.githubusercontent.com/67398691/113690692-a47a2b80-9706-11eb-8b0c-f581791b95d3.png" width="800"/>

   <image src="https://user-images.githubusercontent.com/67398691/113690785-bc51af80-9706-11eb-89f8-b53c84337d0f.png" width="800"/>

- Cumulative Layout Shift란? : 방문자에게 콘텐츠가 얼마나 불안정한 지 측정하는 사용자 경험 측정 항목
- 해결법 :image 태그에 width와 height를 적절히 선입력하여 UI가 렌더링되면서 변경되는 것을 최대한 막아야 한다.
- 본 프로젝트에서의 CLS 점수 해결법은 svc 아이콘 (Material-ui의 깃헙 아이콘이나 새 창 아이콘)의 문제이므로 해당 아이콘의 width와 height를 적용해 주면 될 것.

#### 8. 태니지먼트의 성격 진단 결과를 페이지로 추가 (21. 04. 11)

[태니지먼트](https://www.tanagement.co.kr/home/main)의 나의 강점 진단 결과를 토대로 성격 진단 페이지를 생성

#### 9. 전역 변수로 사용하기 위한 상태 저장용 컨텍스트를 생성 (21. 04. 24)

React의 `useReducer, useContext, createContext, Dispatch`를 사용하여 리듀서 및 전역 변수를 담는 컨텍스트를 생성, `_app.tsx`에 적용

#### 10. 전역 폰트로 Noto Sans JP, Noto Sans KR, Noto Sans를 추가 (21. 04. 26)

참고 영상: [Tailwind CSS Tutorial #6 - Custom Fonts](https://www.youtube.com/watch?v=arfDRUIZOiw)

```javascript
/*
1. public 폴더 내에 font 폴더를 추가,
   구글 폰트에서 다운로드 받은 폰트 파일들을 넣음
2. global.css와 tailwind.config.js에 각각 다음과 같이 코드 추가
3. Layout의 최상단 div에 className에 font-NotoSans를 추가
*/
//global.css
@layer base {
  @font-face {
    font-family: Noto Sans JP;
    font-weight: 300;
    src: url(/public/font/NotoSansJP-Light) format('otf');
  }
  @font-face {
    font-family: Noto Sans KR;
    font-weight: 300;
    src: url(/public/font/NotoSansKR-Light) format('otf');
  }
  @font-face {
    font-family: Noto Sans;
    font-weight: 300;
    src: url(/public/font/NotoSans-Regular) format('ttf');
  }
}

// tailwind.config.js
module.exports = {
  ...
  fontFamily: {
    NotoSans: ['Noto Sans JP', 'Noto Sans KR', 'Noto Sans']
  }
}
```

#### 11. 각 페이지 별 다국어(국어/일본어/영어) 지원 (21. 04. 26 ~ )

- 프로필과 성격 페이지의 내용을 성공적으로 변경 (4/26)
- 스킬 페이지와 프로젝트 페이지를 어떻게 변환해야 할 지 고민중
  - 프로젝트 페이지도 리팩토링을 통해 카드 모듈로 변경해야 하는지?
