import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Syntax highlighting theme

const CodeCard = () => {
  // GraphQL query code as a string
  const graphqlQuery = `
  query ($limit: JSON){
    restaurants (limit:  $where){
      id
      description
      district
      cover {
        url
      }
      category {
        name
      }
      name
      note
      price
      reviews {
        note
        content
      }
    }
  }
  `;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative w-[450px] max-w-1xl p-1 bg-white shadow-lg rounded-lg">
        {/* Placeholder for the browser-like top bar */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-100 rounded-lg"></div>

        {/* Code editor styled section */}
        <div className="relative mt-10 bg-white rounded-lg shadow-md">
          <SyntaxHighlighter
            language="graphql"
            style={vscDarkPlus}
            customStyle={{
              padding: '2px',
              borderRadius: '8px',
              backgroundColor: '#f5f5f5',
              fontSize: '6px',
            }}
          >
            {graphqlQuery}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeCard;
