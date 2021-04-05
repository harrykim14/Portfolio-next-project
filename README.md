### Next.js로 포트폴리오를 작성해보자!

프로젝트 기간 : 21.04.02 ~

1. 이 프로젝트에서 진행할 것

- 포트폴리오의 작성
- 개별 프로젝트를 페이지로 분할
- 공부했던 것들을 블로그 형식의 페이지로 분할

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

6. 프로젝트 리스트 추가 (반응형 미적용)
