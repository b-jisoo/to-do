# Preview

### 회원가입 후 로그인 및 Todo 작성

![리스트 생성](https://user-images.githubusercontent.com/71222288/219447225-ab741508-847d-4a7a-bdc4-1773fed8a72f.gif)

### Todo 삭제

![삭제](https://user-images.githubusercontent.com/71222288/219447210-6ed53665-147e-4e03-81a0-0fc7be1b72ff.gif)

## 📃 프로젝트의 실행 방법

```
npm install

npm run dev
```

기본 주소는 [http://localhost:3000](http://localhost:3000)으로, 실행 후 해당 주소로 접속하시면 됩니다.

# 구현 기능

- 회원가입
- 로그인
- Todo List, Todo 작성 및 삭제

<br>

# 구현 중점사항

- 이번 프로젝트는 부족한 기본기를 키우기 위해, 라이브러리를 최대한 사용하지 않고 구현 해보았습니다.

- 서버와 DB를 사용하지 않았습니다.

- 클린코드를 위해 VAC 패턴을 사용하였습니다.

<br>

## VAC 패턴(View Asset Component)

### VAC패턴은 비즈니스 로직과 뷰를 완전히 분리한 컴포넌트 패턴이다.

![image](https://user-images.githubusercontent.com/71222288/219900256-ab981cf6-506f-444e-841f-6a06fee62702.png)

VAC는 다음과 같은 특징을 가지고 있습니다.

- 반복이나 조건부 노출, 스타일 제어와 같은 렌더링과 관련된 처리만을 수행합니다.
- 오직 props를 통해서만 제어되며 스스로의 상태를 관리하거나 변경하지 않는 stateless 컴포넌트입니다.
- 이벤트에 함수를 바인딩할 때 어떠한 추가 처리도 하지 않습니다.
