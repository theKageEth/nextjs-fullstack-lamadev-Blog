import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const DashboardCard = ({ id, title, desc, content, img, del }) => {
  return (
    <div>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
          <small className="text-default-500">{desc}</small>
          <h4 className="font-bold text-large">{content}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={270}
            height={270}
          />
        </CardBody>
        <button onClick={del}>X</button>
      </Card>
    </div>
  );
};

export default DashboardCard;
