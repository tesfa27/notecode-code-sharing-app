import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSnippetById } from "../api/snippets";
import CodeEditor from "../components/CodeEditor";

const Snippet = () => {
  const { id } = useParams();
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    getSnippetById(id).then((res) => {
      setSnippet(res.data);
    });
  }, [id]);

  if (!snippet) return <p>Loading...</p>;

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-16 max-w-5xl mx-auto pt-8">
      <section className="w-full shadow-xl rounded-lg overflow-hidden bg-white">
        <CodeEditor
          code={snippet.code}
          language={snippet.language}
          theme={snippet.theme}
          onChange={() => {}}
        />
      </section>
    </main>
  );
};

export default Snippet;
