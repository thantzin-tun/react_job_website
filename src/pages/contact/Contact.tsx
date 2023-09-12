import React, { useState, useLayoutEffect } from "react";
import {
  Card,
  FilterBar,
  TextCom,
  FilterCom,
  SearchBarCom,
  Divider,
  Loading,
} from "components";
import { SortingBar } from "theme";
import "./contact.scss";
import { useJob } from "hook";
import { jobs } from "data";
type ContactProps = {};

export const Contact: React.FC<ContactProps> = () => {
  const { getAllJobs_data } = useJob();
  //For Filter Bar
  const [active, setActive] = React.useState<boolean>(false);

  const [loading, setLoading] = React.useState<boolean>(true);

  const [scrollPositionStyle, setScrollPositionStyle] =
    React.useState<boolean>(false);

  const [post, setPost] = React.useState<any>(getAllJobs_data);

  //For Sorting Bar
  const [hide, setHide] = React.useState(false);

  const [select, setSelect] = React.useState(1);

  const selectSort = (num: number) => {
    setSelect(num);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  function updateYPosition() {
    if (window.pageYOffset >= 50) {
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

  return (
    <>
      
      

      <div>
        <SearchBarCom />

        <div className="container-fluid customPadding">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="box my-3 rounded px-4 py-2"
                style={{
                  border: "1px solid #dfdfdf",
                }}
              >
                <TextCom fontSize="18" color="#3b3b3b" fontWeight="600">
                  Jobs in Myanmar
                </TextCom>
              </div>
            </div>
          </div>

          <div className="row m-0 d-flex justify-content-between group">
            <div className="col-lg-9 col-sm-5 col py-2 foundJob">
              <TextCom fontSize="myFont" color="#f57c00" fontWeight="600">
                1,966{" "}
              </TextCom>
              <TextCom fontSize="myFont" color="#3b3b3b" fontWeight="600">
                Jobs Found
              </TextCom>
            </div>

            <div className="col-md-3 col-sm-5 col filter p-0">
              <div className="filter-group" onClick={() => setActive(true)}>
                <i className="fa-solid fa-sliders text-danger fs-6"></i>
                <TextCom marginLeft="8" marginRight="8" fontSize="customSize">
                  Filter
                </TextCom>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="atoZ" onClick={() => setHide(!hide)}>
                <i className="fa-solid fa-arrow-down-a-z me-2 text-primary"></i>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            <div className="col align-items-center justify-content-end sort">
              <TextCom
                color="#3b3b3b"
                fontWeight="600"
                marginRight="20"
                fontSize="sm"
              >
                Sort By:{" "}
              </TextCom>
              <select>
                <option>Recommended</option>
                <option>Posted Date</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Bar */}
          <FilterBar active={active}>
            <FilterCom mobile={true} setActive={setActive} active={active} />
          </FilterBar>

          <SortingBar hide={hide}>
            <div className="d-flex align-items-center justify-content-between ps-3 pe-4 pb-2">
              <TextCom fontSize="18" fontWeight="600">
                FILTER BY:
              </TextCom>
              <i
                className="fa-solid fa-xmark fs-5"
                onClick={() => setHide(!hide)}
              ></i>
            </div>

            <Divider />

            <div
              className="sortOne"
              onClick={() => selectSort(1)}
              style={select === 1 ? { backgroundColor: "#f7f7f7" } : {}}
            >
              <TextCom
                fontSize="14"
                fontWeight="600"
                style={{ width: "100px" }}
              >
                Recommended
              </TextCom>
              <i
                className="fa-solid fa-check fs-6 text-primary ms-5 fw-bold"
                style={
                  select === 1 ? { display: "block" } : { display: "none" }
                }
              ></i>
            </div>
            <div
              className="sortOne"
              onClick={() => selectSort(2)}
              style={select === 2 ? { backgroundColor: "#f7f7f7" } : {}}
            >
              <TextCom
                fontSize="14"
                fontWeight="600"
                style={{ width: "100px" }}
              >
                Post Date
              </TextCom>
              <i
                className="fa-solid fa-check fs-6 text-primary ms-5 fw-bold"
                style={
                  select === 2 ? { display: "block" } : { display: "none" }
                }
              ></i>
            </div>
          </SortingBar>

          {/* Card and Filter Bar in Desktop Size maxWidth->1024px hide FilterCom*/}

          {/* {
          getAllJobs_data && getAllJobs_data.length > 0 ?
          <div className="row mt-3">
          <div className="col-lg-2 filteringCom">
            <div className="position-relative w-100 bg-danger">
              <FilterCom />
            </div>
          </div>
          <div className='col'>
              {
                getAllJobs_data?.map((data: {}, index: number) => (
                  <Card marginBottom={15} data={data}  />
                ))
              }
          </div>
          </div>
          :
          <Loading />
        } */}

          {loading ? <Loading /> : ""}

          {jobs && jobs.length > 0 ? (
            <div className="row mt-3 d-flex align-items-start">
              <div
                className="col-lg-2 filteringCom"
                style={{
                  position: "sticky",
                  top: scrollPositionStyle ? 90 : 0,
                  height: "100dvh",
                  minHeight: "fit-content",
                }}
              >
                <div className="position-relative w-100">
                  <FilterCom />
                </div>
              </div>
              <div className="col">
                {jobs?.map((data: {}, index: number) => (
                  <Card marginBottom={15} data={data} />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
