import React from "react";
import { TextCom } from "components";
import { one, two } from "assets";
import { Contact } from "pages/contact";
// import "../../sass/custom.scss"

type HomeProps = {};

const item = [
  {
    header: "HTML",
    body: "Send Me a Message",
  },
  {
    header: "CSS",
  },
  {
    header: "Javascript",
  },
  {
    header: "Bootstrap",
  },
];

const data = [
  {
    title: "What is HTML?",
    content:
      "HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.HTM describes the structure of a Web page.HTML consists of a series of elements.HTML elements tell the browser how to display the content.",
  },
  {
    title: "What is CSS?",
    content:
      "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color,size, and spacing of your content, split it into multiple columns, or add animations and other decorative features",
  },
  {
    title: "What is JAVASCRIPT?",
    content:
      "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers..",
  },
];

const image = [one, two, one, two, one, two];
export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne1"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne1"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <h4>Hi Accordion One</h4>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne2"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne2"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <h4>Hi Accordion Two</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
