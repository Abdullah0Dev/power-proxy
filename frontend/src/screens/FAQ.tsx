import Accordion from "../components/Accordion";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { FAQs } from "../constants";

const FAQ = () => {
  return (
    <>
      <Section className="overflow-hidden" id="faq">
        <Heading tag="FAQ" title="Frequently asked questions" />
        <div className="">
          <div>
            
            <div className="justify-center flex self-center">
              <div className="flex flex-col gap-4 max-w- 40rem">
                {FAQs.map(({ question, answer }) => (
                  <Accordion key={answer} title={question} content={answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQ;
