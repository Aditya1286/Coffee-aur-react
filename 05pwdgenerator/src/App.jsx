import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallow) str += "!@#$%^&*()_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numallowed, charallow]);

  const copypwdtoclip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numallowed, charallow, passwordgenerator]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col justify-center items-center px-4 py-8">
      <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
        🔐 Password Generator
      </h1>

      <div className="w-full max-w-xl rounded-2xl shadow-2xl bg-white p-6 space-y-6">
        <div className="flex rounded-md overflow-hidden shadow-md">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Generated Password"
            className="outline-none w-full px-4 py-2 text-lg"
          />
          <button
            onClick={copypwdtoclip}
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-5 text-sm font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-center gap-4">
            <label className="font-medium">Length:</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer accent-blue-500"
            />
            <span className="text-blue-700 font-semibold">{length}</span>
          </div>

          <div className="flex gap-8 flex-wrap">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numallowed}
                onChange={() => setNumallowed(prev => !prev)}
                className="accent-blue-600"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charallow}
                onChange={() => setCharallow(prev => !prev)}
                className="accent-blue-600"
              />
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
