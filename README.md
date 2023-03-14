# Preview

### 회원가입 후 로그인 및 Todo 작성

![리스트 생성](https://user-images.githubusercontent.com/71222288/219447225-ab741508-847d-4a7a-bdc4-1773fed8a72f.gif)

### Todo 삭제

![삭제](https://user-images.githubusercontent.com/71222288/219447210-6ed53665-147e-4e03-81a0-0fc7be1b72ff.gif)

## 📃 설치 및 실행

```bash
 npm install

 npm run dev
```

## Cypress e2e 테스트

### 1. e2e 테스트를 하기 앞서서 react서버를 실행시킵니다.

```bash
 npm run dev
```

### 2. cypress 실행.

```bash
npm run cypress
```

기본 주소는 [http://localhost:3000](http://localhost:3000)으로, 실행 후 해당 주소로 접속하시면 됩니다.

## 구현 요구 사항 목록

- /auth 경로에 로그인 / 회원가입 기능을 개발

  - [x] 이메일, 비밀번호를 입력 받아 회원가입
  - [x] 이메일 조건 : 최소 @, . 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동

- Todo List CRUD 기능을 구현

  - [x] 목록 / 상세 영역으로 나누어 구현.
  - [x] Todo 목록을 볼 수 있음.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됨.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음.

<br>

## ⚙️ 사용한 프레임워크 및 라이브러리 설명

### Typescript

- 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거하기 위해 사용

### styled-components

- CSS-in-JS 방식으로 원하는 스타일을 적재적소에 추가하기 위해 사용
- 로직과 스타일을 함께두어 수정시 파일을 번갈아 봐야하는 불편함을 줄이기 위해 사용

### Next

- CRA와 다르게 라우팅 관리, SEO 설정이 쉬워 사용하였습니다.

### recoil

- DB를 사용하지 않고, 데이터를 저장 하기위해 사용
- 사용 방법이 useState와 비슷하여 쉽게 사용하였습니다.

# 구현 중점사항

- 이번 프로젝트는 부족한 기본기를 키우기 위해, 라이브러리를 최대한 사용하지 않고 구현 해보았습니다.

- 서버와 DB를 사용하지 않았습니다.

- 클린코드를 위해 VAC 패턴을 사용하였습니다.

<br>

# 📁 폴더 구조

폴더 구조는 VAC 패턴을 사용해보았습니다.

## VAC 패턴(View Asset Component)란?

### VAC패턴은 비즈니스 로직과 뷰를 완전히 분리한 컴포넌트 패턴이다.

![image](https://user-images.githubusercontent.com/71222288/219900256-ab981cf6-506f-444e-841f-6a06fee62702.png)

VAC는 다음과 같은 특징을 가지고 있습니다.

- 반복이나 조건부 노출, 스타일 제어와 같은 렌더링과 관련된 처리만을 수행합니다.
- 오직 props를 통해서만 제어되며 스스로의 상태를 관리하거나 변경하지 않는 stateless 컴포넌트입니다.
- 이벤트에 함수를 바인딩할 때 어떠한 추가 처리도 하지 않습니다.

```
components
├─Auth/
│  ├─types.ts
│  ├─Login.tsx
│  ├─SignUp.tsx
│  └─view/
│     ├─LoginView.tsx
│     └─SignUpView.tsx
├─Common/
│  ├─types.ts
│  ├─CheckBox.tsx
│  ├─Empty.tsx
│  ├─Modal.tsx
│  └─view/
│     └─ModalView.tsx
├─Layout/
│  ├─type.ts
│  ├─Header.tsx
│  └─view/
│     └─HeaderView.tsx
├─ToDo/
│  ├─types.ts
│  ├─Detail.tsx
│  ├─Item.tsx
│  ├─Layout.tsx
│  ├─List.tsx
│  ├─ListItem.tsx
│  └─view/
│     ├─DetailView.tsx
│     ├─ItemView.tsx
│     ├─LayoutView.tsx
│     ├─ListView.tsx
│     └─ListItemView.tsx
└─ToDoModal/
   ├─type.ts
   ├─AddToDoModal.tsx
   ├─AddToDoListModal.tsx
   └─view/
      ├─AddToDoModalView.tsx
      └─AddToDoListModalView.tsx
```

# ⚠️ 개선 가능 사항

- 고차 컴포넌트(HOC, Higher Order Component)를 사용한 로그인 페이지를 구현할 예정입니다.
- [x] SSR을 사용하여 초기 로딩시 CSS이 망가지는 현상을 개선할 예정입니다.
- 잘못된 로그인 요청시, 아이디가 잘못되었는지, 비밀번호가 잘못되었는지 확인할 수 있도록 구현할 예정입니다.
- Todo를 수정할 수 있게 구현할 예정입니다.
