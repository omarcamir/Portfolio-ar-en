import PageHeader from "../organisms/PageHeader"
import person from '../../../assets/images/person4.webp'

const ContactContent = () => {
  return (
    <div className="container mx-auto py-10">
    <PageHeader page={"Contact"} imgSrc={person} />
    </div>
  )
}

export default ContactContent