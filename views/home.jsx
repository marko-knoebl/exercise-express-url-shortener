import React from "react";

export default () => {
  return (
    <html>
      <head>
        <title>URL shortener</title>
      </head>
      <body>
        <h1>URL shortener</h1>
        <form action="/" method="post">
          <label>
            URL:
            <input name="url" />
          </label>
          <button type="submit">Create short URL</button>
        </form>
      </body>
    </html>
  );
};
