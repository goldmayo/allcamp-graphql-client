import React, { FC, useCallback, useState, useEffect } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import SelectBox from "../../atoms/selectbox/SelectBox";
import { campThemeSelectData, doSelectData, sigunguNmOptionsData } from "../../../core/formdata/SearchFormData";
import { DONAME_VALUE, SIGUNGUNAME_VALUE } from "../../../types/administrativeDivision";
import InputLabel from "../../molecules/input_label/InputLabel";
import SelectBoxLabel from "../../molecules/selectbox_label/SelectBoxLabel";
import Button from "../../atoms/button/Button";
import { SearchBoxFormInterface } from "../../../types/searchFormType";
import { SelectBoxOptionsData } from "../../../types/selectBoxData";

interface SearchFormProps {
  onSubmit: (e: React.UIEvent<HTMLFormElement>) => void;
  // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchForm: FC<SearchFormProps> = (props) => {
  const doNameData = doSelectData;
  const campThemeData = campThemeSelectData;
  const [selectedSigunguList, setSelectedSigunguList] = useState<SelectBoxOptionsData[]>([]);
  const [formValues, setFormValues] = useState<SearchBoxFormInterface>({
    keyword: "",
    doName: "",
    sigunguName: "",
    campTheme: "",
  });

  useEffect(() => {
    console.log("useEffect", formValues.doName);
    if (formValues.doName) {
      setSelectedSigunguList(sigunguNmOptionsData(formValues.doName as DONAME_VALUE));
    }
  }, [formValues.doName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === "doName") {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = useCallback(
    (event: React.UIEvent<HTMLFormElement>) => {
      event.preventDefault();
      const searchQuery = {
        keyword: formValues.keyword || "",
        doName: formValues.doName || "",
        sigunguName: formValues.sigunguName || "",
        campTheme: formValues.campTheme || "",
      };
      console.log(searchQuery);
    },
    [formValues]
  );
  return (
    <FlexBox className="">
      <Form method={"get"} className={""} onSubmit={handleSubmit}>
        <InputLabel
          id={"keyword"}
          name={"keyword"}
          type={"text"}
          placeholder={"캠핑장명을 입력해주세요"}
          onChange={handleChange}
          required={false}
          labelTag={"키워드 검색"}
          className={undefined}
        />
        <FlexBox className="">
          <SelectBoxLabel
            id={doNameData.id}
            options={doNameData.options}
            name={doNameData.name}
            placeholder={"전체/도"}
            onChange={handleChange}
            className={undefined}
            labelTag={doNameData.labelText}
          />
          <SelectBox
            id={doNameData.id}
            options={selectedSigunguList}
            name={"sigunguName"}
            className={undefined}
            placeholder={"전체/시/군"}
            onChange={handleChange}
          />
        </FlexBox>
        <SelectBoxLabel
          id={campThemeData.id}
          options={campThemeData.options}
          name={campThemeData.name}
          placeholder={"전체/테마"}
          onChange={handleChange}
          className={undefined}
          labelTag={campThemeData.labelText}
        />
        <Button type="submit" size="lg" className="border border-black">
          검색
        </Button>
      </Form>
    </FlexBox>
  );
};

export default SearchForm;
