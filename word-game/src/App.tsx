import "./App.css";
import SitemapLogoFooterSection from "./Components/marketing-ui/footer-sections/sitemap-logo";
import DefaultHeaderNavigation from "./Components/marketing-ui/headers/default";
import { TextBox } from "./Components/textBox";

function App() {
  return (
    <>
      <body className="dark:bg-slate-100">
        <DefaultHeaderNavigation />
        <TextBox />
        <SitemapLogoFooterSection />
      </body>
    </>
  );
}

export default App;
