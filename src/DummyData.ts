interface IRowData {
  title?: string;
  eligibility: string;
  skill: string;
  preferential: string;
  workCondition: string;
}

export const setTitleData: IRowData = {
  eligibility: "지원자격",
  skill: "필수스킬",
  preferential: "우대",
  workCondition: "근무조건",
};

export const setRowData: IRowData[] = [
  {
    title: "(주)제네시스",
    eligibility: "경력",
    skill:
      "React, React-Native, javascript, typescript, java, github, objective-C",
    preferential: "우대사항1",
    workCondition: "근무조건1",
  },
  {
    title: "(주)스파이더플랫폼",
    eligibility: "신입",
    skill: "spring",
    preferential: "우대사항2",
    workCondition: "근무조건2",
  },
  {
    title: "(주)비주얼",
    eligibility: "경력3년이상",
    skill: "java",
    preferential: "우대사항3",
    workCondition: "근무조건3",
  },
];
