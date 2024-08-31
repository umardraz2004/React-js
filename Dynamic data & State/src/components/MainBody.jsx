import Card from "./Card";
import { CARDINFO } from "../data.js";
import TabButton from "./tabButtons";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

const MainBody = (props) => {
  const [tabContent, setTabContent] = useState();
  function handleClick(selectesButton) {
    setTabContent(selectesButton);
  }
  // 3rd approach for the tab content
  let initialCardContent = (
    <p className="font-semibold text-lg">Select a topic.</p>
  );
  if (tabContent) {
    initialCardContent = (
      <div className=" bg-blue-600 text-white p-5">
        <h3 className="text-lg font-semibold">{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-rows-1 grid-cols-4 gap-3">
          {/* First approach of sending data to card component
          <Card
            title={CARDINFO[0].title}
            desc={CARDINFO[0].description}
            image={CARDINFO[0].image}
          /> */}
          {/* Second approach of sending data to card component
          <Card {...CARDINFO[0]} />
          <Card {...CARDINFO[1]} />
          <Card {...CARDINFO[2]} />
          <Card {...CARDINFO[3]} /> */}
          {/* 3rd and most useable approach is to load data on the base of its appearance */}
          {CARDINFO.map((cardItem) => {
            return <Card key={cardItem.title} {...cardItem} />;
          })}
        </div>
      </div>
      <div className="mx-10 pb-10">
        <menu className="flex pb-5">
          <TabButton
            isSelected={tabContent === "components"}
            onSelect={() => {
              handleClick("components");
            }}
          >
            Component
          </TabButton>
          <TabButton
            isSelected={tabContent === "jsx"}
            onSelect={() => {
              handleClick("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={tabContent === "lms"}
            onSelect={() => {
              handleClick("lms");
            }}
          >
            LMS
          </TabButton>
          <TabButton
            isSelected={tabContent === "erp"}
            onSelect={() => {
              handleClick("erp");
            }}
          >
            ERP
          </TabButton>
        </menu>
        {/* 3rd approad rendring data using is else */}
        {initialCardContent}
        {/* first approach rendring data using ternary operator*/}
        {/* {!tabContent ? (
          <p className="font-semibold text-lg">Please select a topic.</p>
        ) : (
          <div className=" bg-blue-600 text-white p-5">
            <h3 className="text-lg font-semibold">
              {EXAMPLES[tabContent].title}
            </h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )} */}
        {/* second approach rendring data using && */}
        {/* {!tabContent && (
          <p className="font-semibold text-lg">Please select a topic.</p>
        )}
        {tabContent && (
          <div className=" bg-blue-600 text-white p-5">
            <h3 className="text-lg font-semibold">
              {EXAMPLES[tabContent].title}
            </h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MainBody;
