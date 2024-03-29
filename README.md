
# Vue

---
### 메서드(Methods) / 연산 프로퍼티(Computed) / 감시자(Watch)
---

- **메서드**
  - 템플릿에서 데이터를 바인딩할때 사용 및 이벤트 바인딩 ( 예 : 데이터를 보간법에 사용하기 위함 )
컴포넌트의 리렌더링 주기에 맞춰 매번 실행 / 변동사항이 생기면 모든 메서드 다시 호출함
이벤트 바인딩에는 메서드를 항상 사용함
데이터 바인딩의 경우 중괄호와 함께 사용 ( 페이지에 변동사항이 있을때마다 메서드가 재실행되야할 경우 )

- **연산프로퍼티**
  - 데이터 바인딩에만 쓰임 ( 이벤트 바인딩땐 사용 X )
데이터를 가져오기에 유용함 / 연산프로퍼티에 사용된 데이터가 바뀔때만 재실행됨

- **감시자**
  - 템플릿에 직접 사용하지 않음 / 템플릿 내부에서 참조하지 않음
연산 프로퍼티를 포함해 어느 프로퍼티든 감시자로 감시 할 수 있음
데이터 변경에 대한 반응을 코드로 실행 할 수 있음
http 요청을 보내거나 타이머를 설정하거나 로컬스토리지에 데이터를 저장하는 등
주로 데이터가 아닌 업데이트에 감시자를 사용함
바뀌는 데이터를 토대로 데이터가 아닌 내부에서 업데이트 하는 작업이 있을 때는 감시자를 사용하는게 좋음

메서드 / 연산프로퍼티 / 감시자 중 **감시자의** 사용량이 제일 적음

---
### 축약어
---
v-on: 을 @로 대체할 수 있음
Vue가 제공하는 축약어로 이벤트 리스너가 편리해짐

@를 한번 사용했다면 일부가 아닌 모든곳에서 사용해야함

v-bind:속성명의 축약어로 콜론(:)과 속성명[ :속성명 ]만 작성하면 됨
v-bind:input 의 축약어는 :input

---
### 조건부 콘텐츠와 목록
---

### **v-if & v-show**

 - v-if를 사용하면 특정 조건 만족시에만 콘텐츠를 렌더링
	 - 요소를 실제로 DOM에 추가하거나 제거할 수 있음
	 - v-if는 v-else나 v-else-if와 결합하여 사용가능 직계 요소에만 한정
	- v-else나 v-else-if를 사용할때는 v-if내부가아닌 꼭 바로 뒤에 사용해야함

 - v-show 는 css로 보이거나 숨김( d_none 처리 )

### **v-for**

 - v-for에 든 객체를 다루는 경우 값이나 값과 인덱스 또는 키까지 추출 가능함
	- v-for와 v-if를 함께 사용해야 하는 경우 동일한 요소에 두 디렉티브를 쓰지않고 v-if에 래퍼를 사용하는게 좋음 ( 동일한 요소에만 쓰지 말것 )
	- v-for 목록에 상태가 있으면 키가 필요함 / 목록 항목요소에 콘텐츠와 함께 이동되어야 하는 상태가 있으면 재사용시 오류가 생김 / :key="고유 아이디"

---
### Vue CLI 설치 

node.js 설치 후 명령 프롬프트(cmd)에  `npm install -g @vue/cli` 를 넣어 설치 진행

에러가 생겼을경우 node.js를 재설치 ( 인강 기준에선 https://nodejs.org/en/download/ 에서 다운받으라고 함 )

Visual Studio Code 내 **필수** 확장 프로그램    **"Vuter"**

---
10day 인강 프로퍼티 작동 방식 및 프로퍼티 변경에 대해 들었으나 에러로인해 업로드 불가
차후 업로드 예정
