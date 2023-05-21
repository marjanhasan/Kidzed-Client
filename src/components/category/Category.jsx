import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCards from "./CategoryCards";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// const math = 1;
const Category = () => {
  const [data, setData] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("math");

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-brown-omega.vercel.app/alltoys/${selectedTab}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [selectedTab]);
  useEffect(() => {
    if (tabIndex == 0) {
      setSelectedTab("math");
    } else if (tabIndex == 1) {
      setSelectedTab("language");
    } else if (tabIndex == 2) {
      setSelectedTab("science");
    }
  }, [tabIndex]);
  return (
    <div className="my-container my-6 overflow-hidden">
      <div
        className="title-body"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-offset="300"
      >
        <h1 className="title"> Welcome to unlimited Categorys</h1>
        <p className="para">
          We strive to have a positive impact on our customers and our community
        </p>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Math</Tab>
          <Tab>Language</Tab>
          <Tab>Science</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((d) => (
              <CategoryCards key={d._id} data={d} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((d) => (
              <CategoryCards key={d._id} data={d} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((d) => (
              <CategoryCards key={d._id} data={d} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
