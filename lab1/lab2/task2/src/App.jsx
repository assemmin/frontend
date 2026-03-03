import Section from './components/Section';
import ProductList from './components/ProductList';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Card title="Welcome">
        <p>Cards accept children and dynamic props.</p>
      </Card>

      <Card title="About">
        <p>Cards accept children and dynamic props.</p>
      </Card>

      <Section title="Products">
        <ProductList />
      </Section>
    </>
  );
}