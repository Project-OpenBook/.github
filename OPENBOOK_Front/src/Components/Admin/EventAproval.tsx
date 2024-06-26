import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { useRadioChecks } from "../../Hooks/useRadioChecks";
import { getAccessToken } from "../../Api/Util/token";
import PageNation from "../Util/PageNation";
import { Link, useSearchParams } from "react-router-dom";
import PleaseLogin from "../Login/PleaseLogin";
import { useAproval } from "../../Hooks/useAproval";

interface EventAprovalType {
  content: Array<{
    id: number;
    description: string;
    location: string;
    name: string;
    registrationDate: string;
    status: string;
  }>;
  pageNumber: number;
  totalPages: number;
}

const fetcher = (page: number) =>
  fetch(`http://52.79.91.214:8080/admin/events?page=${page - 1}&status=all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((response) => response.json());

const setEventState = (id: number, status: string) =>
  fetch(`http://52.79.91.214:8080/admin/events/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({ status }),
  }).then((response) => {
    if (response.ok) return response.json();
    else throw new Error();
  });

// TODO: 관리자 계정이 아닐경우 return
export default function EventAproval() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const { data, isError, refetch } = useQuery<EventAprovalType>({
    queryKey: ["event-aproval"],
    queryFn: () => fetcher(+page),
  });

  const {
    checkList,
    clickCheckAll,
    clickCheckbox,
    isCheckAll,
    disableAllCheck,
  } = useRadioChecks(data?.content?.length ?? 1);

  const {
    changeStates: cs,
    onAprove,
    onReject,
  } = useAproval(setEventState, refetch);

  const changeStates = (state: "APPROVE" | "REJECT") => {
    if (!data?.content) return console.error("행사를 찾을 수 없음");
    const eventIds = data.content
      .filter((_, index) => checkList[index])
      .map((event) => event.id);

    cs(eventIds, state);
  };

  useEffect(() => {
    refetch();
    disableAllCheck();
  }, [refetch, page, disableAllCheck]);

  if (!getAccessToken()) {
    return <PleaseLogin />;
  }

  if (isError) return <>행사 요청 데이터를 가져오는데 실패했습니다.</>;
  return (
    <div className="flex-1 flex flex-col p-2">
      <div className="w-full inline-flex gap-3 p-2">
        {/* <img
          className="border p-2 rounded-md"
          src=""
          alt="설정"
          onClick={() => console.log(checkList)}
        ></img> */}
        {/* <button
          className="border p-2 rounded-md"
          onClick={() => changeStates("WATING")}
        >
          승인 대기
        </button> */}
        <button
          className="border p-2 px-4 rounded-md font-bold text-white bg-green-400"
          onClick={() => changeStates("APPROVE")}
        >
          승인
        </button>
        <button
          className="border p-2 px-4 rounded-md font-bold text-white bg-red-400"
          onClick={() => changeStates("REJECT")}
        >
          반려
        </button>
        {/* <button className="border p-2 rounded-md ml-auto">선택 삭제</button> */}
      </div>
      <div className="container mx-auto">
        <table className="min-w-full bg-white border-y border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="py-2 w-1">
                <input
                  type="checkbox"
                  checked={isCheckAll}
                  onChange={clickCheckAll}
                />
              </th>
              <th className="py-2 px-4">행사명</th>
              <th className="py-2 px-4">행사 장소</th>
              <th className="py-2 px-4">행사 신청일</th>
              <th className="py-2 px-4">행사 설명</th>
              <th className="py-2 px-4">상태</th>
              <th className="py-2 px-4">관리</th>
            </tr>
          </thead>
          <tbody>
            {data?.content?.map((booth, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    onChange={(e) => clickCheckbox(e, index)}
                    checked={checkList[index] ?? false}
                  />
                </td>
                <td className="py-2 px-4 border-b">{booth.name}</td>
                <td className="py-2 px-4 border-b">{booth.location}</td>
                <td className="py-2 px-4 border-b">{booth.registrationDate}</td>
                <td className="py-2 px-4 border-b">{booth.description}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    booth.status === "REJECT"
                      ? "text-red-500"
                      : booth.status === "APPROVE"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  {booth.status}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="w-full text-white bg-green-400 shadow-md hover:underline mr-2 border rounded-md px-2 whitespace-nowrap"
                    onClick={() => onAprove(booth.id)}
                  >
                    승인
                  </button>
                  <button
                    className="w-full text-white bg-red-400 shadow-md hover:underline border rounded-md px-2 whitespace-nowrap"
                    onClick={() => onReject(booth.id)}
                  >
                    반려
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data && <PageNation maxPage={data.totalPages ?? 1} showPage={5} />}
      </div>
    </div>
  );
}
