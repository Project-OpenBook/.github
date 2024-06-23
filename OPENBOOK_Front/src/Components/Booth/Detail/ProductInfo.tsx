export default function ProductInfo() {
  return (
    <div className="flex rounded-md justify-center items-center gap-5 p-3 shadow-md">
      <img
        className="w-1/6"
        src="https://via.placeholder.com/96"
        alt="부스 이미지"
      />
      <div className="flex flex-col w-5/6 gap-3">
        <div>물품명 : 농담곰 인형</div>
        <div>재고 : 100 개</div>
        <div>설명 : 농담곰 인형입니다 귀엽죠</div>
        <div>가격 : 8000 원</div>
      </div>
    </div>
  );
}
