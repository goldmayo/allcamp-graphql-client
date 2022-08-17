// https://www.graphql-code-generator.com/
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  findCampById?: Maybe<CampInfo>;
  searchCamps?: Maybe<CampInfoConnection>;
};

export type QueryFindCampByIdArgs = {
  contentId?: InputMaybe<Scalars["Int"]>;
};

export type QuerySearchCampsArgs = {
  first: Scalars["Int"];
  after?: InputMaybe<Scalars["String"]>;
  params?: InputMaybe<CampSearchParamsDto>;
};

export type CampInfoConnection = {
  __typename?: "CampInfoConnection";
  totalCounts?: Maybe<Scalars["Int"]>;
  edges?: Maybe<Array<Maybe<CampInfoEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
};

export type CampInfoEdge = {
  __typename?: "CampInfoEdge";
  node?: Maybe<CampInfo>;
  cursor?: Maybe<Scalars["String"]>;
};

export type CampInfo = {
  __typename?: "CampInfo";
  contentId: Scalars["Int"];
  addr1?: Maybe<Scalars["String"]>;
  addr2?: Maybe<Scalars["String"]>;
  trsagntNo?: Maybe<Scalars["String"]>;
  allar?: Maybe<Scalars["Int"]>;
  animalCmgCl?: Maybe<Scalars["String"]>;
  autoSiteCo?: Maybe<Scalars["Int"]>;
  bizrno?: Maybe<Scalars["String"]>;
  brazierCl?: Maybe<Scalars["String"]>;
  caravAcmpnyAt?: Maybe<Scalars["String"]>;
  caravSiteCo?: Maybe<Scalars["Int"]>;
  clturEventAt?: Maybe<Scalars["String"]>;
  createdtime?: Maybe<Scalars["String"]>;
  doNm?: Maybe<Scalars["String"]>;
  eqpmnLendCl?: Maybe<Scalars["String"]>;
  exprnProgrm?: Maybe<Scalars["String"]>;
  exprnProgrmAt?: Maybe<Scalars["String"]>;
  extshrCo?: Maybe<Scalars["Int"]>;
  facltDivNm?: Maybe<Scalars["String"]>;
  facltNm?: Maybe<Scalars["String"]>;
  featureNm?: Maybe<Scalars["String"]>;
  fireSensorCo?: Maybe<Scalars["Int"]>;
  firstImageUrl?: Maybe<Scalars["String"]>;
  frprvtSandCo?: Maybe<Scalars["Int"]>;
  frprvtWrppCo?: Maybe<Scalars["Int"]>;
  glampSiteCo?: Maybe<Scalars["Int"]>;
  gnrlSiteCo?: Maybe<Scalars["Int"]>;
  homepage?: Maybe<Scalars["String"]>;
  induty?: Maybe<Scalars["String"]>;
  indvdlCaravSiteCo?: Maybe<Scalars["Int"]>;
  insrncAt?: Maybe<Scalars["String"]>;
  Intro?: Maybe<Scalars["String"]>;
  lctCl?: Maybe<Scalars["String"]>;
  lineIntro?: Maybe<Scalars["String"]>;
  manageNmpr?: Maybe<Scalars["Int"]>;
  manageSttus?: Maybe<Scalars["String"]>;
  mangeDivNm?: Maybe<Scalars["String"]>;
  mapX?: Maybe<Scalars["Float"]>;
  mapY?: Maybe<Scalars["Float"]>;
  mgcDiv?: Maybe<Scalars["String"]>;
  modifiedtime?: Maybe<Scalars["String"]>;
  operDeCl?: Maybe<Scalars["String"]>;
  operPdCl?: Maybe<Scalars["String"]>;
  posblFcltyCl?: Maybe<Scalars["String"]>;
  posblFcltyEtc?: Maybe<Scalars["String"]>;
  prmisnDe?: Maybe<Scalars["String"]>;
  resveCl?: Maybe<Scalars["String"]>;
  resveUrl?: Maybe<Scalars["String"]>;
  sbrsCl?: Maybe<Scalars["String"]>;
  sbrsEtc?: Maybe<Scalars["String"]>;
  sigunguNm?: Maybe<Scalars["String"]>;
  siteBottomCl1?: Maybe<Scalars["Int"]>;
  siteBottomCl2?: Maybe<Scalars["Int"]>;
  siteBottomCl3?: Maybe<Scalars["Int"]>;
  siteBottomCl4?: Maybe<Scalars["Int"]>;
  siteBottomCl5?: Maybe<Scalars["Int"]>;
  siteMg1Co?: Maybe<Scalars["Int"]>;
  siteMg1Vrticl?: Maybe<Scalars["Int"]>;
  siteMg1Width?: Maybe<Scalars["Int"]>;
  siteMg2Co?: Maybe<Scalars["Int"]>;
  siteMg2Vrticl?: Maybe<Scalars["Int"]>;
  siteMg2Width?: Maybe<Scalars["Int"]>;
  siteMg3Co?: Maybe<Scalars["Int"]>;
  siteMg3Vrticl?: Maybe<Scalars["Int"]>;
  siteMg3Width?: Maybe<Scalars["Int"]>;
  sitedStnc?: Maybe<Scalars["Int"]>;
  swrmCo?: Maybe<Scalars["Int"]>;
  tel?: Maybe<Scalars["String"]>;
  themaEnvrnCl?: Maybe<Scalars["String"]>;
  toiletCo?: Maybe<Scalars["Int"]>;
  trlerAcmpnyAt?: Maybe<Scalars["String"]>;
  wtrplCo?: Maybe<Scalars["Int"]>;
  zipcode?: Maybe<Scalars["String"]>;
  hvofBgnde?: Maybe<Scalars["String"]>;
  hvofEnddle?: Maybe<Scalars["String"]>;
  direction?: Maybe<Scalars["String"]>;
  tooltip?: Maybe<Scalars["String"]>;
  glampInnerFclty?: Maybe<Scalars["String"]>;
  caravInnerFclty?: Maybe<Scalars["String"]>;
  clturEvent?: Maybe<Scalars["String"]>;
  tourEraCl?: Maybe<Scalars["String"]>;
};

export type CampSearchParamsDto = {
  facltNm?: InputMaybe<Scalars["String"]>;
  doNm?: InputMaybe<Scalars["String"]>;
  sigunguNm?: InputMaybe<Scalars["String"]>;
  themaEnvrnCl?: InputMaybe<Scalars["String"]>;
  facltDivNm?: InputMaybe<Scalars["String"]>;
  lctCl?: InputMaybe<Scalars["String"]>;
  gnrlSiteCo?: InputMaybe<Scalars["String"]>;
  autoSiteCo?: InputMaybe<Scalars["String"]>;
  glampSiteCo?: InputMaybe<Scalars["String"]>;
  caravSiteCo?: InputMaybe<Scalars["String"]>;
  indvdlCaravSiteCo?: InputMaybe<Scalars["String"]>;
  siteBottomCl1?: InputMaybe<Scalars["String"]>;
  siteBottomCl2?: InputMaybe<Scalars["String"]>;
  siteBottomCl3?: InputMaybe<Scalars["String"]>;
  siteBottomCl4?: InputMaybe<Scalars["String"]>;
  siteBottomCl5?: InputMaybe<Scalars["String"]>;
  sbrsCl?: InputMaybe<Scalars["String"]>;
  trlerAcmpnyAt?: InputMaybe<Scalars["String"]>;
  caravAcmpnyAt?: InputMaybe<Scalars["String"]>;
  animalCmgCl?: InputMaybe<Scalars["String"]>;
};
