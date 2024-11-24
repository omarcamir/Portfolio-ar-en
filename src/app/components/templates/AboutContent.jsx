import PageHeader from "../organisms/PageHeader";
import person from '../../../assets/images/person2.webp'
import Statistics from "../organisms/Statistics";
import MySkills from "../organisms/MySkills";

const AboutContent = () => {
  return (
    <div className="container mx-auto py-10">
      <PageHeader page={"About"} imgSrc={person} />
      <Statistics/>
      <MySkills/>
    </div>
  );
};

export default AboutContent;
