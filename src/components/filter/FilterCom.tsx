import React from "react";
import { TextCom, ButtonCom, Divider } from "components";
import { FilterStyle, FilterHeader, MobileFilterHeader } from "theme";
import { useMediaQuery } from "react-responsive";

import { useJob, useSearch } from "hook";
import { job_fun, locations } from "data";

type FilterProps = {
  mobile?: boolean;
  setActive?: any;
  active?: boolean;
};

// const data = [
//   {
//     title: "FRESHNESS",
//     content: <InputBox />
//   },
//   {
//     title: "INDUSTRY",
//     content: <RadioBox />
//   },
//   {
//     title: "EXP. LEVEL",
//     content: <RadioBox />
//   },
//   {
//     title: "MINIMUM",
//     content: <InputBox />
//   },
//   {
//     title: "REPAT / EXPAT",
//     content: <InputBox />
//   }
// ]

export const FilterCom: React.FC<FilterProps> = ({
  mobile,
  setActive,
  active,
}) => {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });

  const { getJobCity_data, getJobCategory_data, getJobLevel_data } = useJob();

  const { dispatch, JobAction, CallingJobSearchApi, state } = useSearch();

  return (
    <>
      <FilterStyle mobile={mobile}>
        {isMobile ? (
          <>
            <MobileFilterHeader>
              <div className="d-flex align-items-center justify-content-between">
                <TextCom fontSize="customSize" fontWeight="600">
                  FILTER BY:
                </TextCom>
                <div className="close_filterBar">
                  <TextCom
                    color="#007bff"
                    fontSize="xs"
                    hoverColor="#504c4c"
                    onClick={() =>
                      dispatch({ type: JobAction.reset, payload: "" })
                    }
                  >
                    Clear All
                  </TextCom>
                  <ButtonCom
                    isBorder={false}
                    bgColor="#1ac880"
                    btnPaddingInline="40"
                    size="13"
                    border_radius="4"
                    btnTextColor="#fff"
                    onClick={() => setActive(!active)}
                  >
                    OK
                  </ButtonCom>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4">
                <TextCom
                  color="#007bff"
                  fontSize="xs"
                  hoverColor="#504c4c"
                  onClick={() =>
                    dispatch({ type: JobAction.reset, payload: "" })
                  }
                >
                  Clear All
                </TextCom>
                <ButtonCom
                  isBorder={false}
                  bgColor="#1ac880"
                  size="13"
                  border_radius="4"
                  btnWidth="50%"
                  btnTextColor="#fff"
                  onClick={CallingJobSearchApi}
                >
                  Apply
                </ButtonCom>
              </div>
            </MobileFilterHeader>

            <Divider marginTop={5} />
          </>
        ) : (
          <FilterHeader>
            <TextCom fontSize="customSize" fontWeight="600">
              FILTER BY:
            </TextCom>
            <div className="clear">
              <TextCom
                color="#007bff"
                fontSize="xs"
                hoverColor="#504c4c"
                onClick={() => dispatch({ type: JobAction.reset, payload: "" })}
              >
                Clear All
              </TextCom>
              <ButtonCom
                isBorder={false}
                bgColor="salaryHover"
                btnPaddingInline="10"
                size="13"
                border_radius="4"
                btnTextColor="cardBack"
                onClick={CallingJobSearchApi}
              >
                <div className=" z-index-10">Apply</div>
              </ButtonCom>
            </div>
          </FilterHeader>
        )}

        <div className="accordion two" id="accordionPanelsStayOpenExampleTwo">
          {/* Freshness Date*/}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
              >
                FRESHNESS
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    dispatch({
                      type: JobAction.freshDate,
                      payload: e.target.value,
                    })
                  }
                  value={state.freshDate}
                >
                  <option defaultValue={"Any Days"}>
                    <TextCom color="#495057" fontSize="xs">
                      Any Days
                    </TextCom>
                  </option>
                  <option value={0}>
                    <TextCom color="#495057" fontSize="xs">
                      Today
                    </TextCom>
                  </option>
                  <option value={7}>
                    <TextCom color="#495057" fontSize="xs">
                      Last 7 days
                    </TextCom>
                  </option>
                  <option value={14}>
                    <TextCom color="#495057" fontSize="xs">
                      Last 14 days
                    </TextCom>
                  </option>
                  <option value={30}>
                    <TextCom color="#495057" fontSize="xs">
                      Last 30 days
                    </TextCom>
                  </option>
                </select>
              </div>
            </div>
          </div>

          {isMobile ? (
            <>
              {/* Job Function(Category) */}

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                  >
                    JOB FUNCTION
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    {/* For loop for Category */}
                    <div className="check d-flex align-items-center mb-1">
                      <input
                        className="me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={(e) =>
                          dispatch({ type: JobAction.category, payload: "" })
                        }
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Any
                      </label>
                    </div>

                    {/* Job Function */}
                    {/* {getJobCategory_data?.map(
                      (
                        category: { id: number; name: string },
                        index: number
                      ) => {
                        return (
                          <div className="check d-flex align-items-center p-0 mb-1">
                            <input
                              className="me-2"
                              type="radio"
                              name="flexRadioDefault7"
                              id="flexRadioDefault7"
                              onChange={(e) =>
                                dispatch({
                                  type: JobAction.category,
                                  payload: category.id,
                                })
                              }
                              checked={state.category_id === category.id}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault7"
                            >
                              {category.name}
                            </label>
                          </div>
                        );
                      }
                    )} */}

                    {job_fun?.map((category: string, index: number) => {
                      return (
                        <div className="check d-flex align-items-center p-0 mb-1">
                          <input
                            className="me-2"
                            type="radio"
                            name="flexRadioDefault7"
                            id="flexRadioDefault7"
                            onChange={(e) =>
                              dispatch({
                                type: JobAction.category,
                                payload: category,
                              })
                            }
                            // checked={state.category_id === category.id}
                            checked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault7"
                          >
                            {category}
                          </label>
                        </div>
                      );
                    })}

                    <div className="check d-flex align-items-center mb-1">
                      <input
                        className="me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={(e) =>
                          dispatch({ type: JobAction.category, payload: 1 })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Teaching and Education
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven"
                  >
                    LOCATION
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSeven"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    {/* For loop for City */}
                    <div className="form-check d-flex align-items-center p-0 mb-0">
                      <input
                        className="me-2"
                        type="radio"
                        name="flexRadioDefault"
                        onChange={(e) =>
                          dispatch({ type: JobAction.city, payload: "" })
                        }
                        defaultChecked
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Any
                      </label>
                    </div>

                    {/* Job City */}
                    {/* {
                        getJobCity_data?.map((city: { id: number, name: string }, index: number) => {
                          return (
                            <div className="form-check d-flex align-items-center p-0 mb-0">
                              <input className="me-2" type="radio" name="flexRadioDefault10"
                                id="flexRadioDefault10"
                                onChange={(e) => dispatch({ type: JobAction.city, payload: city.id })}
                                checked={state.city_id === city.id}
                              />
                              <label className="form-check-label" htmlFor="flexRadioDefault10">
                                {city.name}
                              </label>
                            </div>
                          )
                        })
                      } */}

                    {locations?.map((city: string, index: number) => {
                      return (
                        <div className="form-check d-flex align-items-center p-0 mb-0">
                          <input
                            className="me-2"
                            type="radio"
                            name="flexRadioDefault10"
                            id="flexRadioDefault10"
                            onChange={(e) =>
                              dispatch({
                                type: JobAction.city,
                                payload: city,
                              })
                            }
                            // checked={state.title === city}
                            checked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault10"
                          >
                            {city}
                          </label>
                        </div>
                      );
                    })}

                    <div className="form-check d-flex align-items-center p-0 mb-0">
                      <input
                        className="me-2"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        onChange={(e) =>
                          dispatch({ type: JobAction.city, payload: 99 })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault4"
                      >
                        Yangon
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* Industry */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
              >
                INDUSTRY
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                {/* Loop for Industry */}
                <div className="check d-flex align-items-center mb-1">
                  <input
                    className="check me-2"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    defaultChecked={state.industry === ""}
                    onChange={() =>
                      dispatch({ type: JobAction.industry, payload: "" })
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault5"
                  >
                    Any
                  </label>
                </div>

                <div className="check d-flex align-items-center mb-1">
                  <input
                    className="me-2"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                    onChange={() =>
                      dispatch({ type: JobAction.industry, payload: 4 })
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault6"
                  >
                    Banking(40)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Exp level */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
              >
                EXP. LEVEL
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    dispatch({ type: JobAction.level, payload: e.target.value })
                  }
                  value={state.level}
                >
                  <option value="">
                    <TextCom>Any</TextCom>
                  </option>

                  {getJobLevel_data?.map((data: any, index: number) => {
                    return (
                      <option value={data.job_id}>
                        <TextCom>{data.job_level}</TextCom>
                      </option>
                    );
                  })}

                  {/* <option value={1}>
                    <TextCom>Entry Level</TextCom>
                  </option>
                  <option value={4}>
                    <TextCom>Experienced Non-Manager</TextCom>
                  </option>
                  <option value={2}>
                    <TextCom>Manager</TextCom>
                  </option>
                  <option value={3}>
                    <TextCom>Director and Above</TextCom>
                  </option> */}
                </select>
              </div>
            </div>
          </div>

          {/* Salary */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
              >
                MINIMUM SALARY
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <input
                  className="form-control"
                  type="number"
                  step="10000"
                  min="0"
                  onChange={(e) =>
                    dispatch({
                      type: JobAction.salary,
                      payload: e.target.value,
                    })
                  }
                  value={state.salary}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </FilterStyle>
    </>
  );
};
