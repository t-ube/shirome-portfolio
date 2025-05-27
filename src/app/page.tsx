export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
      <img
        src="/images/pfp.jpg"
        alt="Profile picture"
        className="w-32 h-32 rounded-full border border-gray-300"
      />

      <h1 className="text-4xl font-bold">Shirome</h1>
      <p className="text-lg text-gray-700">XRPL Tool Developer</p>

      <a
        href="https://x.com/shirome_x"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-700 hover:text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 1200 1227"
          style={{ verticalAlign: 'middle', fill: 'currentColor' }}
        >
          <path d="M711.911 499.438L1144.71 0H1041.48L666.146 433.906L361.674 0H0L456.232 662.103L0 1227H103.238L503.68 763.25L825.354 1227H1187.03L711.911 499.438ZM555.73 699.907L512.768 638.384L143.04 80.289H314.567L601.749 494.452L644.711 555.975L1029.33 1115.54H857.803L555.73 699.907Z" />
        </svg>
        <span>@shirome_x</span>
      </a>

      {/* Project: Owner Note */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Owner Note</h2>
        <img
          src="/images/owner-note.png"
          alt="Owner Note screenshot"
          className="w-full rounded mb-2"
        />
        <p className="text-sm text-gray-600">
          A wallet address management tool for XRPL NFT creators and collectors. Enables tagging, grouping, and notes for each address.
        </p>
        <a
          href="https://owner-note.shirome.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 underline"
        >
          Visit Owner Note
        </a>
      </div>

      {/* Chrome Extension Project */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Chrome Extension</h2>
        <img
          src="/images/owner-note-ext.png"
          alt="Chrome extension screenshot"
          className="w-full rounded mb-2"
        />
        <p className="text-sm text-gray-600">
          A Chrome extension that replaces XRPL addresses with user-defined names, integrated with the Owner Note service.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/owner-note/gknlngbijejlhkmmheimhakmppelkbek"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 underline"
        >
          View Extension
        </a>
      </div>

      {/* SKULL AVATAR Project */}
      <div className="w-full max-w-md bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">SKULL AVATAR</h2>
        <img
          src="/images/skull-avatar.png"
          alt="SKULL AVATAR screenshot"
          className="w-full rounded mb-2"
        />
        <p className="text-sm text-gray-600">
          A dynamic NFT project built on XRPL. Users can customize 3D avatars and mint them as NFTs. Includes real-time previews and blockchain integration.
        </p>
        <a
          href="https://skull-avatar.shirome.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 underline"
        >
          View SKULL AVATAR
        </a>
      </div>
    </main>
  );
}
