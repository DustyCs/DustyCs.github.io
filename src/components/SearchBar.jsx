import { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from "../hooks/DebounceHook";
import { searchDataset } from "../data/search_data_set";

async function fetchSuggestionsMock(q, type) {
  if (!q || q.trim().length < 1) return [];

  const dataset = searchDataset;

  const qLower = q.toLowerCase();
  return dataset
    .filter((d) => d.label.toLowerCase().includes(qLower))
    .filter((d) => type === "all" || d.type === type)
    .slice(0, 6);
}

export default function ResponsiveSearch() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);

  const [category, setCategory] = useState("all");

  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      if (!debouncedQuery || debouncedQuery.trim().length === 0){
        setSuggestions([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const res = await fetchSuggestionsMock(debouncedQuery, category);
      if(!mounted) return;
      setSuggestions(res);
      setIsLoading(false);
      setActiveIndex(-1);
      setShowSuggestions(true);
    }

    run();
    return () => {
      mounted = false;
    };
  }, [debouncedQuery, category]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener("click", onDocClick);

    return () => {
      document.removeEventListener("click", onDocClick);
    }
  }, []);

  function onSelectSuggestion(s) {
    setQuery(s.label);
    setShowSuggestions(false);
    setActiveIndex(-1);

    // perform search
    // console.log("selected:", s);
    if (s.url){ window.location.href = s.url; }
  }

  function onKeyDown(e) {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        onSelectSuggestion(suggestions[activeIndex]);
      } else {
        console.log("perform search:", query, category);
        setShowSuggestions(false);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveIndex(-1);
    }
  }

  function highlightMatch(text, q) {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length);
    return (
      <>
        {before}
        <span className="font-semibold underline decoration-yellow-300 decoration-2">
          {match}
        </span>
        {after}
      </>
    );
  }

  return (
    <div ref={containerRef}>
      <div className="flex items-center border border-gray-400 rounded-md px-2 py-1 relative w-full max-w-xl">
        <IoSearchOutline
          className="text-2xl cursor-pointer"
          onClick={() => { 
            setIsMobileOpen(!isMobileOpen)
            setTimeout(() => inputRef.current?.focus(), 50)

          }}
        />
        <div
          className={`sm:flex ${
            isMobileOpen ? "flex" : "hidden"
          } flex-1 items-center space-x-2 ml-2`}
        >
          
          <select onChange={(e) => setCategory(e.target.value)} value={category} className="bg-transparent text-xl focus:outline-none border-r pr-2 cursor-pointer">
            <option value="all">All</option>
            <option value="games">Games</option>
            <option value="posts">Posts</option>
            <option value="projects">Projects</option>
            <option value="contact">Contact</option>
            <option value="license">License</option>
          </select>

          <div className="relative flex-1">
            <input ref={inputRef} value={query} onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => {
              if (suggestions.length > 0) {
                setShowSuggestions(true);
              }
            }}
            onKeyDown={onKeyDown}
            placeholder="Search..."
            className="bg-transparent text-xl focus:outline-none placeholder-gray-500"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-controls="search-suggestion-list"
            />

            {isLoading && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M22 12a10 10 0 01-10 10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            )}

          </div>

          {/* <input className="flex-1 bg-transparent text-xl focus:outline-none placeholder-gray-500" placeholder="Search..."/> */}
          <button className="border-1 border-black text-black px-3 py-1 cursor-pointer rounded-md text-xl hover:bg-gray-300 transition sm:hidden md:hidden lg:block"
              onClick={() => {
                console.log("perform search:", query, category);
                // setShowSuggestions(false);
              }}
          >
            Search
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
        <ul
          id="search-suggestion-list"
          role="listbox"
          aria-label="Search suggestions"
          className="absolute top-10 left-0 z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden max-h-60 scrollbar-thin"
        >
          {suggestions.map((s, idx) => (
            <li
              key={s.id}
              role="option"
              aria-selected={activeIndex === idx}
              onMouseDown={(e) => {
                // use onMouseDown to prevent blur before click
                e.preventDefault();
                onSelectSuggestion(s);
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`px-3 py-2 flex items-center cursor-pointer ${
                activeIndex === idx ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="text-sm flex-1 min-w-0">
                <div className="truncate">
                  {highlightMatch(s.label, query)}
                </div>
              </div>
              <div className="text-xs text-gray-400 ml-2">{s.type}</div>
            </li>
          ))}
        </ul>
      )}

      {showSuggestions && !isLoading && query.trim().length > 0 && suggestions.length === 0 && (
        <div className="absolute top-10 left-0 z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md px-3 py-3 text-sm text-gray-500">
          No suggestions, try different words.
        </div>
      )}
      </div>
    </div>
  );
}
