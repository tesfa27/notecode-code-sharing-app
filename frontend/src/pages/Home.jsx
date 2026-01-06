import { useEffect, useState } from "react";
import { DEFAULT_HTML } from "../constants/defaultSnippet";
import CodeEditor from "../components/CodeEditor";
import Toolbar from "../components/Toolbar";
import ShareLink from "../components/ShareLink";
import { createSnippet } from "../api/snippets";
import NoteCodeLogo  from "../assets/NoteCodeLogo.svg";


const Home = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("light");
  const [canShare, setCanShare] = useState(true);
  const [sharedId, setSharedId] = useState(null);

  useEffect(() => {
    setCode(DEFAULT_HTML);
  }, []);

  const handleShare = async () => {
    const res = await createSnippet({ code, language, theme });
    setSharedId(res.data.id);
    setCanShare(false);
  };

  const handleEdit = (value) => {
    setCode(value);
    setCanShare(true);
  };

  return (
    <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16 pt-8 max-w-5xl mx-auto">

      <section className="flex flex-col items-center mb-8"> 

          <img
          src={NoteCodeLogo}
          alt=""
          className="mb-4 w-40 sm:w-48"
          />
       

        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Create & Share
        </h1>

        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Your Code Easily
        </h1>
      </section>

      <section className="w-full shadow-xl rounded-lg overflow-hidden bg-white">
       <div className="relative">
        <CodeEditor
          code={code}
          language={language}
          theme={theme}
          onChange={handleEdit}
        />

        {/* Desktop toolbar positioned where the share button was */}
        <div className="hidden md:block absolute bottom-4 right-4">
          <Toolbar
            className="shadow-lg rounded-md"
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
            onShare={handleShare}
            canShare={canShare}
          />
        </div>
      </div>
      </section>

      {/* Mobile toolbar (full-width) */}
      <div className="w-full md:hidden mt-4">
        <Toolbar
          className="w-full"
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
          onShare={handleShare}
          canShare={canShare}
        />
      </div> 

      {sharedId &&
      <section>
      <ShareLink id={sharedId} />
      </section>
      }
    </main>
  );
};

export default Home;
