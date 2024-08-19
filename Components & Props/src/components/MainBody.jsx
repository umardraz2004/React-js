import Card from "./Card";
import CardImage from "../assets/img/image.jpg";
const MainBody = (props) => {
  return (
    <div className=" bg-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-rows-1 grid-cols-4 gap-3">
          <Card title="CRM" desc="Out first Product is CRM" image={CardImage} />
          <Card
            title="LMS"
            desc="Our second product is LMS"
            image={CardImage}
          />
          <Card title="ERP" desc="Our third product is ERP" image={CardImage} />
          <Card
            title="Todo Application"
            desc="Our fourth product is ERP"
            image={CardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
