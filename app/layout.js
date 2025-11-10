// app/layout.js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        background: "rgb(231, 221, 211)",
        overflowX: "hidden",
        backgroundSize: "250px 250px",
        maxWidth: "100vw",
        margin: "0px",
        boxSizing: "border-box",
      }}
    >
      <body
        className={`antialiased`}
        style={{
          background: "rgb(231, 221, 211)",
          backgroundSize: "250px 250px",
          maxWidth: "100vw",
          width: "100%",
          margin: "0px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="App"
          id="App"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowX: "hidden",
          }}
        >
          <div
            className="webBody"
            style={{
              position: "relative",
              zIndex: 2,
              height: "fit-content",
              minHeight: "calc(100vh - 610px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
