### Next.js로 포트폴리오를 작성해보자!

프로젝트 기간 : 21.04.02 ~ 21.04.06 (완료)

1. 이 프로젝트에서 진행할 것

- [x] 포트폴리오의 작성
- [ ] ~~개별 프로젝트를 페이지로 분할~~
- [x] **(대체)** 프로젝트 페이지 내에 깃헙 링크와 실제 페이지를 아이콘 형식으로 배치
- [ ] ~~공부했던 것들을 블로그 형식의 페이지로 분할~~
- [x] **(대체)** 기술 스택을 카드 리스트로 변경

2. 레이아웃과 사이드 프로필 바 생성 (21. 04. 02)

- 레이아웃으로 내비게이션 바를 생성하고 프로필, 기술 스택, 프로젝트 용 페이지로 이동할 수 있게끔 라우팅 설정
- 사이드 프로필 바에 프로필 이미지를 넣고 GitHub 링크를 연동

3. 기술 스택을 카드 형식의 리스트로 작성 (21. 04. 03)

- tailwindcss의 템플릿을 사용하여 카드 형식의 리스트가 담긴 페이지를 작성

4. 기본적인 프로필 페이지를 작성 (21. 04. 04)

5. 페이지를 반응형으로 변경

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

6. 프로젝트 리스트 페이지의 추가

7. 기술 스택 페이지와 프로젝트 리스트 페이지의 성능 검사
   <image src="https://user-images.githubusercontent.com/67398691/113690692-a47a2b80-9706-11eb-8b0c-f581791b95d3.png" width="800"/>

<image src="https://user-images.githubusercontent.com/67398691/113690785-bc51af80-9706-11eb-89f8-b53c84337d0f.png" width="800"/>

- Cumulative Layout Shift란? : 방문자에게 콘텐츠가 얼마나 불안정한 지 측정하는 사용자 경험 측정 항목
- 해결법 :image 태그에 width와 height를 적절히 선입력하여 UI가 렌더링되면서 변경되는 것을 최대한 막아야 한다.
- 본 프로젝트에서의 CLS 점수 해결법은 svc 아이콘 (Material-ui의 깃헙 아이콘이나 새 창 아이콘)의 문제이므로 해당 아이콘의 width와 height를 적용해 주면 될 것.
