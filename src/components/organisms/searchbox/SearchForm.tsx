import React, { FC, useState, useRef } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import SelectBox from "../../atoms/selectbox/SelectBox";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { DONAME_VALUE } from "../../../types/administrativeDivision";
import { doSelectData, sigunguNmOptionsData } from "../../../core/formdata/SearchFormData";
import { MdMap, MdSearch } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import Modal from "../../atoms/modal/Modal";
import AdvancedSearchForm from "../advanced_searchbox/AdvancedSearchForm";
import { useRouter } from "next/router";

interface SearchFormProps {
  type: "landing" | "default";
}

const SearchForm: FC<SearchFormProps> = ({ type }) => {
  const router = useRouter();
  const DoData = doSelectData;

  const modalRef = useRef<HTMLDialogElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const doNameRef = useRef<HTMLSelectElement>(null);
  const sigunguNameRef = useRef<HTMLSelectElement>(null);

  const [selected, setSelected] = useState<DONAME_VALUE | "">("");

  const SHAPE = {
    flexDirection: type === "landing" ? "col" : "row",
    fontSize: type === "landing" ? "text-headline3 font-semibold" : "text-body1",
    space: type === "landing" ? "mb-4" : "mx-1",
    width: {
      keywordInput: type === "landing" ? "w-full" : " w-3/12",
      dosiSelect: type === "landing" ? "w-full" : "w-3/12",
      button: type === "landing" ? "w-full" : "w-2/12",
    },
    buttonSize: type === "landing" ? "lg" : "base",
  };
  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    modalRef.current?.showModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.currentTarget.value as DONAME_VALUE);
  };

  const handleSubmit = (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = {
      facltNm: keywordRef.current?.value === "" ? null : keywordRef.current?.value,
      doNm: doNameRef.current?.value === "" ? null : doNameRef.current?.value,
      sigunguNm: sigunguNameRef.current?.value === "" ? null : sigunguNameRef.current?.value,
    };
    // console.log(params);
    router.push(
      {
        pathname: "/search",
        // query: params,
        query: {
          searchParams: JSON.stringify(params),
        },
      },
      "/search"
    );
  };
  return (
    <section
      className={`${
        type === "landing"
          ? "drop-shadow-md py-4 px-12 flex items-center justify-center border rounded-md bg-primary-lightgray border-primary-bordergray max-w-[1080px] w-11/12 mb-10"
          : "flex items-center p-3 justify-center w-full bg-primary-navy sticky top-0 z-50"
      }`}
    >
      <Form
        method={"get"}
        className={`flex flex-${SHAPE.flexDirection} items-center justify-center w-10/12 `}
        onSubmit={handleSubmit}
      >
        <FlexBox className={`items-center justify-around ${SHAPE.width.keywordInput} h-12 ${SHAPE.space} graybox`}>
          <MdSearch className="px-1" size={"32px"} />
          <Input
            id={"keyword"}
            ref={keywordRef}
            name={"keyword"}
            type={"text"}
            placeholder={"캠핑장명을 입력해주세요"}
            className={`${SHAPE.fontSize}`}
            required={false}
            // pattern={}
          />
        </FlexBox>

        <FlexBox className={`items-center justify-center w-full ${SHAPE.width.dosiSelect} ${SHAPE.space} graybox`}>
          <FlexBox className="items-center w-6/12 h-12 ">
            <MdMap className="px-1" size={"32px"} />
            <SelectBox
              id={DoData.id}
              ref={doNameRef}
              options={DoData.options}
              name={DoData.name}
              className={`${SHAPE.fontSize}`}
              placeholder={"전체/도"}
              onChange={handleChange}
            />
          </FlexBox>
          <FlexBox className="items-center w-6/12 h-12 border-l border-monoscale-1">
            <MdMap className="px-1" size={"32px"} />
            <SelectBox
              id={DoData.id}
              ref={sigunguNameRef}
              options={sigunguNmOptionsData(selected as DONAME_VALUE)}
              name={"sigunguName"}
              className={`${SHAPE.fontSize}`}
              placeholder={"전체/시/군"}
            />
          </FlexBox>
        </FlexBox>
        <FlexBox className={`justify-center ${SHAPE.width.button} h-12`}>
          <Button
            type="submit"
            size={`${SHAPE.buttonSize as "lg" | "base"}`}
            className="font-semibold btn-primary"
            onClick={openModal}
          >
            상세검색
          </Button>
          <Button type="submit" size={`${SHAPE.buttonSize as "lg" | "base"}`} className="font-semibold btn-primary">
            검색하기
          </Button>
        </FlexBox>
      </Form>

      <Modal ref={modalRef} className={""} title={"상세검색"}>
        <FlexBox className="flex flex-col items-center justify-center p-6 border border-primary-bordergray">
          <AdvancedSearchForm />
        </FlexBox>
      </Modal>
    </section>
  );
};

export default SearchForm;
