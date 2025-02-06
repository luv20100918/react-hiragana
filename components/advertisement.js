"use client";

import Script from "next/script";

/**
 * 광고 컴포넌트
 * @returns {JSX.Element} 광고 UI
 */
export default function Advertisement() {
  return (
    <>
      {/* Google AdSense */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5768884488453878"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <div className="w-full my-4 min-h-[100px] flex justify-center items-center">
        <ins
          className="adsbygoogle block w-full"
          style={{ 
            display: 'block',
            minWidth: '300px',
            maxWidth: '100%',
            minHeight: '100px'
          }}
          data-ad-client="ca-pub-5768884488453878"
          data-ad-slot="9551132248"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({});
            `,
          }}
        />
      </div>
    </>
  );
} 