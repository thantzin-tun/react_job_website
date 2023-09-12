import React, { useState, useLayoutEffect } from "react";
import { TextCom } from "components";
import { SearchBarContainer, SearchBarStyle } from "theme";
import { downArrow } from "assets";
import { useJob, useSearch } from "hook";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { job_fun, locations } from "data";

type SearchBarProps = {};

export const SearchBarCom: React.FC<SearchBarProps> = () => {
  const { getJobCity_data, getJobCategory_data } = useJob();

  const { JobAction, CallingJobSearchApi, dispatch } = useSearch();

  const [scrollPositionStyle, setScrollPositionStyle] = useState(false);

  const isSearchBarChange = useMediaQuery({ maxWidth: 1023 });

  function updateYPosition() {
    if (window.pageYOffset >= 50 && window.innerWidth > 1024) {
      setScrollPositionStyle(true);
      return;
    }
    setScrollPositionStyle(false);
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", updateYPosition);
    return () => {
      window.removeEventListener("scroll", updateYPosition);
    };
  }, []);

  const [category, setCategory] = useState<string>("All Job Functions");
  const [location, setLocation] = useState<string>("All Locations");

  return (
    <>
      <SearchBarContainer
        style={
          scrollPositionStyle
            ? {
                position: "fixed",
                top: "0%",
                left: "0%",
                backgroundColor: "#4315b8",
              }
            : {}
        }
      >
        <div className="container-fluid customPadding">
          {isSearchBarChange ? (
            <>
              <SearchBarStyle>
                <div className="title">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="All positions, Companies, Keywords"
                    onChange={(e) =>
                      dispatch({
                        type: JobAction.title,
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
              </SearchBarStyle>

              <div className="findJobBtn">
                <button className="find_button">Find Jobs</button>

                <div className="list"></div>

                <button className="find_list">
                  <Link to="/" className="link">
                    <i className="fa-solid fa-list-ul text-light fs-5"></i>
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <SearchBarStyle>
              <div className="title bg-white ps-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="All positions, Companies, Keywords"
                  onChange={(e) =>
                    dispatch({ type: JobAction.title, payload: e.target.value })
                  }
                />
              </div>

              <div className="line" />

              <div className="job-function">
                {/* Bootstrap DropDown */}
                <div className="dropdown w-100">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-regular fa-folder-closed"></i>
                    <TextCom
                      fontSize="14"
                      fontWeight="600"
                      hoverColor="dropDownHover"
                    >
                      {category}
                    </TextCom>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      style={{ width: "8px" }}
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <div className="myDropDown">
                      <div
                        className="item d-flex align-items-center justify-content-start"
                        onClick={() => {
                          dispatch({ type: JobAction.category, payload: "" });
                          setCategory("All Job Functions");
                        }}
                      >
                        <span className="dot"></span>
                        <div className="move d-flex align-items-center">
                          <TextCom
                            fontSize="13"
                            fontWeight="600"
                            hoverColor="dropDownHover"
                          >
                            All Job Functions
                          </TextCom>
                        </div>
                      </div>

                      {/* Job Category */}
                      {/* {
                          getJobCategory_data?.map((category: { id: number, name: string }, index: number) => {
                            return (
                              <div className='item d-flex align-items-center justify-content-start'
                                onClick={() => {
                                  dispatch({ type: JobAction.category, payload: category.id });
                                  setCategory(category.name)
                                }
                                }
                                key={index}
                              >
                                <span className='dot'></span>
                                <div className='move d-flex align-items-center'>
                                  <TextCom fontSize="13" fontWeight="600" hoverColor='dropDownHover'>{category.name}</TextCom>
                                </div>
                              </div>
                            )
                          })
                        } */}

                      {job_fun?.map((name: string, index: number) => {
                        return (
                          <div
                            className="item d-flex align-items-center justify-content-start"
                            onClick={() => {
                              dispatch({
                                type: JobAction.category,
                                payload: name,
                              });
                              setCategory(name);
                            }}
                            key={index}
                          >
                            <span className="dot"></span>
                            <div className="move d-flex align-items-center">
                              <TextCom
                                fontSize="13"
                                fontWeight="600"
                                hoverColor="dropDownHover"
                              >
                                {name}
                              </TextCom>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>

              <div className="line"></div>

              <div className="location">
                <div className="dropdown w-100">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    <TextCom
                      fontSize="13"
                      fontWeight="600"
                      hoverColor="dropDownHover"
                    >
                      {location}
                    </TextCom>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      style={{ width: "8px" }}
                    />
                  </button>
                  <ul className="dropdown-menu">
                    <div className="myDropDown">
                      <div
                        className="item d-flex align-items-center justify-content-start"
                        onClick={() => {
                          dispatch({ type: JobAction.city, payload: "" });
                          setLocation("All Locations");
                        }}
                      >
                        <span className="dot"></span>
                        <div className="move d-flex align-items-center">
                          <TextCom
                            fontSize="13"
                            fontWeight="600"
                            hoverColor="dropDownHover"
                          >
                            All Locations
                          </TextCom>
                        </div>
                      </div>

                      {/* Location */}
                      {/* {getJobCity_data?.map(
                        (city: { id: number; name: string }, index: number) => {
                          return (
                            <div
                              className="item d-flex align-items-center justify-content-start"
                              onClick={() => {
                                dispatch({
                                  type: JobAction.city,
                                  payload: city.id,
                                });
                                setLocation(city.name);
                              }}
                              key={index}
                            >
                              <span className="dot"></span>
                              <div className="move d-flex align-items-center">
                                <TextCom
                                  fontSize="13"
                                  fontWeight="600"
                                  hoverColor="dropDownHover"
                                >
                                  {city.name}
                                </TextCom>
                              </div>
                            </div>
                          );
                        }
                      )} */}

                      {locations?.map((city: string, index: number) => {
                        return (
                          <div
                            className="item d-flex align-items-center justify-content-start"
                            onClick={() => {
                              dispatch({
                                type: JobAction.city,
                                payload: city,
                              });
                              setLocation(city);
                            }}
                            key={index}
                          >
                            <span className="dot"></span>
                            <div className="move d-flex align-items-center">
                              <TextCom
                                fontSize="13"
                                fontWeight="600"
                                hoverColor="dropDownHover"
                              >
                                {city}
                              </TextCom>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>

              <div className="line"></div>

              <div className="findJobButton">
                <button className="find-button" onClick={CallingJobSearchApi}>
                  Find Jobs
                </button>

                <div className="list"></div>

                <button className="find-list">
                  <Link to="/" className="link">
                    <i className="fa-solid fa-list-ul text-light fs-5"></i>
                  </Link>
                </button>
              </div>
            </SearchBarStyle>
          )}
        </div>
      </SearchBarContainer>
    </>
  );
};
