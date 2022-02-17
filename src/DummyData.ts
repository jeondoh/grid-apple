export function setTitleData(): string[] {
  return [
    "지원자격",
    "필수스킬",
    "우대",
    "근무조건",
    "전형절차",
    "복리후생",
    "접수기간",
  ];
}

interface IRowData {
  title: string;
}

interface IRowsData {
  data: IRowData[];
}

export function setRowData(): IRowsData {
  return {
    data: [
      { title: "(주)제네시스" },
      { title: "(주)스파이더플랫폼" },
      { title: "(주)비주얼" },
    ],
  };
}
