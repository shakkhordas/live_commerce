import './bootstrap';
import './components/Example';

const app = () => {
  return (
    <div>app</div>
  )
}

export default app

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    )
}