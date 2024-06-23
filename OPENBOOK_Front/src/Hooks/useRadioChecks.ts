import { ChangeEvent, useCallback, useState } from "react";

export function useRadioChecks(length: number) {
  const [checkList, setCheckList] = useState<boolean[]>(
    new Array(length).fill(false)
  );
  const [isCheckAll, setIsCheckAll] = useState(false);

  const clickCheckbox = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCheckList((prevList) => {
      const newList = [...prevList];
      newList[index] = e.target.checked;
      setIsCheckAll(newList.every((check) => check));
      return newList;
    });
  };

  const clickCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isAll = e.target.checked;
    setIsCheckAll(isAll);
    setCheckList(new Array(length).fill(isAll));
  };

  const disableAllCheck = useCallback(() => {
    const isAll = false;
    setIsCheckAll(isAll);
    setCheckList(new Array(length).fill(isAll));
  }, [length]);

  return {
    clickCheckAll,
    clickCheckbox,
    checkList,
    isCheckAll,
    disableAllCheck,
  };
}
