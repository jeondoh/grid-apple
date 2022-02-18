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
    preferential:
      "React 및 React Native 경력 3년 이상</br>" +
      "Figma를 이용한 협업을 경험해보신 분</br>" +
      "코드 최적화, 퍼포먼스 향상에 관심이 많으신 분</br>" +
      "업무 효율 향상 및 자동화에 관심이 많으신 분</br>",
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
