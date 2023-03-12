메서드 / 연산 프로퍼티 / 감시자
Methods / Computed / Watch

메서드 - 템플릿에서 데이터를 바인딩할때 사용 및 이벤트 바인딩 ( 예 : 데이터를 보간법에 사용하기 위함 )
컴포넌트의 리렌더링 주기에 맞춰 매번 실행 / 변동사항이 생기면 모든 메서드 다시 호출함
이벤트 바인딩에는 메서드를 항상 사용함
데이터 바인딩의 경우 중괄호와 함께 사용 ( 페이지에 변동사항이 있을때마다 메서드가 재실행되야할 경우 )

연산프로퍼티 - 데이터 바인딩에만 쓰임 ( 이벤트 바인딩땐 사용 X )
데이터를 가져오기에 유용함 / 연산프로퍼티에 사용된 데이터가 바뀔때만 재실행됨

감시자 - 템플릿에 직접 사용하지 않음 / 템플릿 내부에서 참조하지 않음
연산 프로퍼티를 포함해 어느 프로퍼티든 감시자로 감시 할 수 있음
데이터 변경에 대한 반응을 코드로 실행 할 수 있음
http 요청을 보내거나 타이머를 설정하거나 로컬스토리지에 데이터를 저장하는 등
주로 데이터가 아닌 업데이트에 감시자를 사용함
바뀌는 데이터를 토대로 데이터가 아닌 내부에서 업데이트 하는 작업이 있을 때는 감시자를 사용하는게 좋음

메서드 / 연산프로퍼티 / 감시자 중 감시자의 사용량이 제일 적음
