export default function ServiceInfo() {
  return (
    <div className="flex rounded-md justify-center items-center gap-5 p-3 shadow-md">
      <img
        className="w-1/6"
        src="https://via.placeholder.com/96"
        alt="부스 이미지"
      />
      <div className="flex flex-col w-5/6 gap-3">
        <div>서비스명 : 농담곰 인형 만들어보기</div>
        <div>설명 : 귀여운 농담곰 인형을 직접 만들어보자</div>
        <div>가격 : 10000 원</div>
      </div>
    </div>
  );
}
