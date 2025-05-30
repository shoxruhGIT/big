const Footer = () => (
  // Parent relative, CTA absolute bo'lishi uchun
  <footer className="bg-black w-full relative pt-80 md:pb-14 pb-10 z-10 overflow-visible">
    {/* CTA absolute bo'lishi uchun parent relative va padding-top katta */}
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-4">
      <div>
        <div className="font-bold text-white mb-2">BIG DATA</div>
        <p className="text-gray-400 text-xs leading-5">
          National Reserve System Of Resource Funding
          <br />
          All Rights Reserved
        </p>
      </div>
      <div>
        <div className="font-bold text-white mb-2">DATA CENTER</div>
        <ul className="text-gray-400 text-xs space-y-1">
          <li>Web Hosting</li>
          <li>Cloud Hosting</li>
          <li>Dedicated Server</li>
          <li>Shared Hosting</li>
          <li>VPS Hosting</li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-2">Domain Search</div>
        <ul className="text-gray-400 text-xs space-y-1">
          <li>New Domain</li>
          <li>Search Domains</li>
          <li>Search AI</li>
          <li>Club Big Data</li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-2">Hello</div>
        <ul className="text-gray-400 text-xs space-y-1">
          <li>Customers</li>
          <li>Support Portal</li>
          <li>Video Tutorials</li>
          <li>Live Chat</li>
        </ul>
      </div>
    </div>
    <div className="max-w-5xl mx-auto border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-center text-xs text-gray-500">
      <span>BIG DATA</span>
      <span>WALLET</span>
      <span>LICENSE</span>
    </div>
  </footer>
);

export default Footer;
