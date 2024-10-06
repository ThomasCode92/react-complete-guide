import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';

export default function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            title="We got 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in business of planning highly individualized vacation
                trips for more than 20 years.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            title="We're working with local guides"
            className="accordion-item"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Instead we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
