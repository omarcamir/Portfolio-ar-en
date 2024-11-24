import PageHeader from "../organisms/PageHeader";
import person from '../../../assets/images/person2.webp'

const AboutContent = () => {
  return (
    <div className="container mx-auto py-10">
      <PageHeader page={"About"} imgSrc={person} />
    </div>
  );
};

export default AboutContent;
