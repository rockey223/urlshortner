export default function Advertisement() {
  return (
    <>
      {/* Responsive Ad Space - Desktop (728x90) and Tablet (468x60) */}
      <div 
        className="w-full my-8 flex justify-center items-center bg-gray-100 rounded-lg shadow-lg"
        style={{
          minHeight: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        data-ad-format="leaderboard"
        data-ad-unit="responsive"
      >
        <div
          className="adsbygoogle"
          style={{
            display: "block",
            minWidth: "300px",
            width: "100%",
            height: "auto",
          }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="0000000000"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></div>
      </div>

      {/* Mobile Ad Space (320x50) and others */}
      <div 
        className="w-full my-6 flex justify-center items-center bg-gray-100 rounded-lg shadow-lg lg:hidden"
        style={{
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        data-ad-format="banner"
        data-ad-unit="mobile"
      >
        <div
          className="adsbygoogle"
          style={{
            display: "block",
            minWidth: "300px",
            width: "100%",
            height: "auto",
          }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="0000000000"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></div>
      </div>
    </>
  );
}
